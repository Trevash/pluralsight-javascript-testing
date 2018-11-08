let roles;
let user;

exports.setUser = function(inUser) {
  user = inUser;
};

exports.isAuthorized = function(neededRole) {
  if (user) {
    return user.isAuthorized(neededRole);
  }
  return roles.indexOf(neededRole) >= 0;
};

exports.isAuthorizedAsync = function (neededRole, callback) {
  setTimeout(function () {
    callback(roles.indexOf(neededRole) >= 0)
  }, 2100);
};

exports.isAuthorizedPromise = function (neededRole) {
  return new Promise(function(resolve) {
    setTimeout(function () {
      resolve(roles.indexOf(neededRole) >= 0)
    }, 2100);
  })
};

exports.getIndex = function (req, res) {
  if (req.user.isAuthorized('admin')) {
    return res.render('index');
  }
  res.render('error');
};

exports.setRoles = function (role) {
  roles = role;
  user.roles = role;
};