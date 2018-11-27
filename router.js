//
const Authentication = require('./controllers/authentication');

module.exports = function (app) {
    app.post('/signup', Authentication.signup);

    app.get('/', function(req, res, next) { //req:request, res: response, next: error handling
        res.send(['water', 'phone', 'paper'])
    });
}