var assert = require('assert');
var authController = require('../../controllers/auth.controller');
let expect = require('chai').expect;
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {
  beforeEach(function () {
    authController.setRoles(['user'])
  });
  describe('isAuthorized', function () {
    it('Should return false if not authorized', function () {
      let isAuth = authController.isAuthorized('admin');
      assert.equal(false, isAuth);
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
});
