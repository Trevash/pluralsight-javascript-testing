var assert = require('assert');
var authController = require('../../controllers/auth.controller');
let expect = require('chai').expect;
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinon = require('sinon');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {
  beforeEach(function () {
    // authController.setRoles(['user'])
  });
  describe('isAuthorized', function () {
    let user = {};
    beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
      sinon.spy(user, 'isAuthorized')
      authController.setUser(user);
    });
    it('Should return false if not authorized', function () {
      let isAuth = authController.isAuthorized('admin');
      user.isAuthorized.calledOnce.should.be.true
      isAuth.should.be.false;
    });
    it('Should return true if authorized', function () {
      assert.equal(true, authController.isAuthorized('user'));
    });
    it('should not allow a get if not authorized');
    it('should allow get if authorized');
  });

  describe('isAuthorizedAsync', function () {
    it('Should return false if not authorized', function (done) {
      this.timeout(2500);
      authController.isAuthorizedAsync('admin', function (isAuth) {
        assert.equal(false, isAuth);
        done();
      });
    });
  });

  describe('isAuthorizedPromise', function () {
    it('Should return false if not authorized', function () {
      this.timeout(2500);
      return authController.isAuthorizedPromise('admin').should.eventually.be.false;
    });
  })

  describe('getIndex', function () {
    let user = {};
    beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
    });
    it('should render index if authorized', function () {
      let isAuth = sinon.stub(user, 'isAuthorized').returns(true);
      let req = {user: user};
      let res = {
        render: function() {}
      };

      var mock = sinon.mock(res);
      mock.expects('render').once().withExactArgs('index');
      authController.getIndex(req, res);
      isAuth.calledOnce.should.be.true;
      mock.verify();
    })
  })
});
