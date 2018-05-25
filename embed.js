const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

//POST = title, body
var postSchema = new mongoose.Schema({
    title: String,
    body: String
});
var Post = mongoose.model('Post', postSchema);  

//USER = email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]
});
var User = mongoose.model('User', userSchema);


/*var user = new User({
    email: "min@abc.xyz",
    name: "tmkc"
});
user.save((err, savedUser) => {
    if(err)
        console.log(err);
    else
        console.log(savedUser);
})*/

var newPost = new Post({
    title: "Reflections",
    body: "Why so noob bro!"
});
newPost.save((err, savedPost) => {
    if(err)
        console.log(err);
    else
        console.log(savedPost);
});
