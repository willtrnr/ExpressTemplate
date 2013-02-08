var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, db, config) {
  passport.use(new LocalStrategy(function (username, password, done) {
    password = db.user.hashPassword(password);
    db.user.getByUsername(username, function (err, user) {
      if (user) {
        if (password && user.password === password) {
          done(err, user);
        } else {
          done(err, null, { loginerror: __('Wrong password!') });
        }
      } else {
        db.user.getByEmail(username, function (err, user) {
          if (user) {
            if (password && user.password === password) {
              done(err, user);
            } else {
              done(err, null, { loginerror: __('Wrong password!') });
            }
          } else {
            done(err, null, { loginerror: __('Username or e-mail not found!') });
          }
        });
      }
    });
  }));
};

