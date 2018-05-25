const mongoose = require('mongoose');
//POST = title, body
var postSchema = new mongoose.Schema({
    title: String,
    body: String
});
var Post = mongoose.model('Post', postSchema); 
module.exports = Post;