var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//create Schema
var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//add some passport-local-mongoose methods to user
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);