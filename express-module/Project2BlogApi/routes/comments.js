const store=require('./store.js')
const path=require('path')
const validate=require(path.join(__dirname,"..","validations","getData"))

module.exports={
	getComments(req,res){
		let s=store.store.posts.length
		console.log(s)
		if(req.params.postId>=s)
			return "Bad Request"
		return store.store.posts[req.params.postId].comments
	},
	addComment(req,res){
		let s=store.store.posts.length
		if(req.params.postId>=s)
			return "Bad Request"
		let obj=validate.getCommentData(req)//whitelisting
		store.store.posts[req.param.postId].comments.push(obj)
		return store.store.posts[req.param.postId].comments
	},
	updateComment(req,res){
		let s=store.store.posts.length
		if(req.params.postId>=s)
			return "Bad Request"
		s=store.store.posts[req.params.postId].comments.length
		if(req.params.commentId>=s)
			return "Bad Request"
		let obj=validate.getCommentData(req)
		Object.assign(store.store.posts[req.params.postId].comments[req.params.commentId],obj)
		return store.store.posts[req.params.postId].comments
	},
	deleteComment(req,res){
		let s=store.store.posts.length
		if(req.params.postId>=s)
			return "Bad Request"
		s=store.store.posts[req.params.postId].comments.length
		if(req.params.commentId>=s)
			return "Bad Request"
		store.store.posts[req.params.postId].comments.splice(req.params.commentId,1);
		return store.store.posts[req.params.postId].comments
	}
}