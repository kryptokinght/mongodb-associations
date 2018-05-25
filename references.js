const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

const Post = require('./models/post');
const User = require('./models/user');

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
