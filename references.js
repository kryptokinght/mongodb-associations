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

Post.create({
    title: "Create polyjuice potion",
    body: "Secretes to create potion is in my uw."
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
});




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
