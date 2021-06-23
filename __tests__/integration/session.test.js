'use strict'

const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('Authentication', () => {
  
  beforeEach(async () => {
    await truncate()
  })    
  
  it('01 should authenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    //console.log('user', user)

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(200)

  });

  it('02 should not authenticate with invalid credentials', async () => {
    
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123431256'
      })

    expect(response.status).toBe(401)
  });

  it('03 should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.body).toHaveProperty("token")
  });

  it('05 should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${ user.generateToken() }`)
      

    expect(response.status).toBe(200)
  });

  it('06 should not be able to access private route without jwt token', async () => {
    
    const response = await request(app).get('/dashboard')

    expect(response.status).toBe(401)
    
  });

  it('07 should not be able to access private routes with invalid jwt token', async () => {

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 123456`)
      

    expect(response.status).toBe(401)
  });

});
