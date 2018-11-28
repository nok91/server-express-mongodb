//
const Authentication = require('./controllers/authentication');
const passportConfig = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session : false });

module.exports = function (app) {
    //all requests come in must pass requireAuth request and then go on to the request handler
    app.get('/', requireAuth, function(req, res){
        res.send({ hi: 'there' });
    });
    app.post('/signup', Authentication.signup);

    
}