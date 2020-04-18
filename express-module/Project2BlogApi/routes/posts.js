const store=require('./store.js')
const path=require('path')
const validate=require(path.join(__dirname,"..","validations","getData"))

module.exports={
	getPosts(req,res){
		return store.store.posts
	},
	addPost(req,res){
		let obj=validate.getPostData(req)//whitelisting
		store.store.posts.push(obj)
		return store.store.posts
	},
	updatePost(req,res){
		let s=store.store.posts.length
		if(req.params.postId>=s)
			return "Bad Request"
		let obj=validate.getPostData(req)
		Object.assign(store.store.posts[req.params.postId],obj)
		return store.store.posts[req.params.postId]
	},
	deletePost(req,res){
		let s=store.store.posts.length
		if(req.params.postId>=s)
			return "Bad Request"
		store.store.posts.splice(req.params.postId,1);
		return store.store.posts
	}
}