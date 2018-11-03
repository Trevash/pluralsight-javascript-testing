let roles;

exports.isAuthorized = function(neededRole) {
  return roles.indexOf(neededRole) >= 0;
};

exports.isAuthorizedAsync = function (neededRole, callback) {
  setTimeout(function () {
    callback(roles.indexOf(neededRole) >= 0)
  }, 2100);
};

exports.setRoles = function (role) {
  roles = role;
};