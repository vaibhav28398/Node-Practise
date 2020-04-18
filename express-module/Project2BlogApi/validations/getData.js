let post={
	name: '',
	url: '',
	text: '',
	comments: []
}

let comments={text:''}

module.exports={
	getPostData(req){
		post.name=req.body.name
		post.url=req.body.url
		post.text=req.body.text
		post.comments=[]
		if(req.body.comments)
		post.comments=req.body.comments
		return post
	},
	getCommentData(req){
		comments.text=req.body.text
	}
}