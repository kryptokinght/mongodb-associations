const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

//USER = email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String
});
var User = mongoose.model('User', userSchema);
//POST = title, body
var postSchema = new mongoose.Schema({
    title: String,
    body: String
});
var Post = mongoose.model('Post', postSchema);

var user = new User({
    email: "min@abc.xyz",
    name: "tmkc"
});
user.save((err, savedUser) => {
    if(err)
        console.log(err);
    else
        console.log(savedUser);
})
