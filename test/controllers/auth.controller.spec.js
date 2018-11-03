var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function () {
  beforeEach(function () {
    authController.setRoles(['user'])
  });
  describe('isAuthorized', function () {
    it('Should return false if not authorized', function () {
      assert.equal(false, authController.isAuthorized('admin'));
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
  })
});
