const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), //We telling Jwt strategy that whenever we request comes in we want the password to handle it, it need to look at the request header and specifically a header called authorization to find the token
    secretOrKey: config.secret
};

// Create JWT strategy
// payload: decoded jwt token
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that other
    // Otherwise, call done without a user object

    User.findById(payload.sub, function(err, user){
        if(err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false); 
        }

    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);