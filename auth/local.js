var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, db, config) {
  passport.use(new LocalStrategy(function (username, password, done) {
    if (username && password) {
      password = db.user.hashPassword(password);
      db.user.findByUsername(username, function (err, user) {
        if (!err && user && user.password === password) done(err, user);
        else done(err, null, { loginerror: 'Wrong username and/or password!' });
      });
    } else done(null, null, { loginerror: 'The username and password are required!' });
  }));
};
