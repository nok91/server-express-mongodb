//
module.exports = function (app) {
    app.get('/', function(req, res, next) { //req:request, res: response, next: error handling
        res.send(['water', 'phone', 'paper'])
    });
}