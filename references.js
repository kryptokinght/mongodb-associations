const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

//POST = title, body
var postSchema = new mongoose.Schema({
    title: String,
    body: String
});
var Post = mongoose.model('Post', postSchema);  

//USER = email, name
/*var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]
});*/
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model('User', userSchema);

/*Post.create({
    title: "Fall in love with Ron",
    body: "Ron Weasely is a weasel."
}, (err, post) => {
    User.findOne({email:"hemaG@hogwarts.edu"}, (err, foundUser) => {
        if(err)
            console.log(err);
        else {
            foundUser.posts.push(post);
            foundUser.save((err, savedUser) => {
                if (err)
                    console.log(err);
                else
                    console.log(savedUser);
            })
        }
    });        
});*/

//search for a user and show its posts
User.findOne({email:"hemaG@hogwarts.edu"}).populate("posts").exec((err, foundUser) => {
    if(err)
        console.log(err);
    else
        console.log(foundUser);
})


/*
user.save((err, savedUser) => {
    if(err)
        console.log(err);
    else
        console.log(savedUser);
})*/
/*
var newPost = new Post({
    title: "Reflections",
    body: "Why so noob bro!"
});
newPost.save((err, savedPost) => {
    if(err)
        console.log(err);
    else
        console.log(savedPost);
});*/
