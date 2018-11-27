const User = require('../models/user');


exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    //We search for all user by email and the then call the callback..if they do existingUser will be populated with the founded user otherwise will be null
    User.findOne({ email: email}, function( err, existingUser){

        if (err) {
            return next(err);
        }
        
        // See if a user with the given email exists. (we don't want any duplicates)
        if(existingUser) {
            return res.status(422).send({ error : 'Email is in use' });
        }

        // If a user wiuth email does NOT exist, create and save user record
        const user = new User ({
            email: email,
            password: password
        });

        //this will save the record to the database
        user.save(function(err) {
            if(err) {
                return next(err);
            }
        }); 

        // Respond to request indicatin the user was created
        // res.json(user)
        res.json({ success: true });
    });

}