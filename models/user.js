const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema is what we use to tell to mongoose about the very particular fields taht our model is going have

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});


// Create Model class
const ModelClass = mongoose.model('user', userSchema);


// Export the model
module.exports = ModelClass;