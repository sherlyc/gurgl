import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'

import serverAuth from '../../server/lib/auth'
import './setup-dom'
import * as login from '../../client/actions/login'
import * as logout from '../../client/actions/logout'

test('Login request returns correct object', t => {
  let loginObject = login.requestLogin()
  t.is(loginObject.type, login.LOGIN_REQUEST)
  t.is(loginObject.isFetching, true)
  t.is(loginObject.isAuthenticated, false)
})

test('Login success returns correct object', t => {
  let loginObject = login.receiveLogin('test')
  t.is(loginObject.type, login.LOGIN_SUCCESS)
  t.is(loginObject.isFetching, false)
  t.is(loginObject.isAuthenticated, true)
  t.is(loginObject.user, 'test')
})

test('Login fail returns correct object', t => {
  let loginObject = login.loginError('test message')
  t.is(loginObject.type, login.LOGIN_FAILURE)
  t.is(loginObject.isFetching, false)
  t.is(loginObject.isAuthenticated, false)
  t.is(loginObject.message, 'test message')
})

test.cb('Login success dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(200, { token: serverAuth.createToken({ name: 'test'}, 'imasecret')})

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_SUCCESS')
    t.is(action.user.name, 'test')
    t.end()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Login 500 error dispatches correct action', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(500)

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_FAILURE')
    t.is(action.message, "We're sorry, something went wrong while trying to log you in! Please try again")
    t.end()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Login forbidden error dispatches correct action', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(403)

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_FAILURE')
    t.is(action.message, "Your email or password is incorrect, please try again")
    t.end()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Logout dispatches correct actions', t => {
  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGOUT_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGOUT_SUCCESS')
    t.end()
  })

  logout.logoutUser(() => {})(dispatch)
})

test('Logout request returns correct object', t => {
  let logoutObject = logout.requestLogout()
  t.is(logoutObject.type, 'LOGOUT_REQUEST')
  t.is(logoutObject.isFetching, true)
  t.is(logoutObject.isAuthenticated, true)
})

test('Logout success returns correct object', t => {
  let logoutObject = logout.receiveLogout()
  t.is(logoutObject.type, 'LOGOUT_SUCCESS')
  t.is(logoutObject.isFetching, false)
  t.is(logoutObject.isAuthenticated, false)
})