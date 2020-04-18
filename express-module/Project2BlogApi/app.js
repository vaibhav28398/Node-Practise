const express=require('express')
const path=require('path')
const routes=require("./routes")
const validate=require(path.join(__dirname,"validations","validate"))
const app=express()
const boddyParser=require('body-parser')

app.use(boddyParser.json())

app.use((req,res,next)=>{
	if(req.method=='POST'||req.method=='PUT')
	{
		if(!req.body)
		{
			return res.send('Bad Request')

		}
		else
		{
			next()
		}
	}
	next()	
})

app.get('/posts',(req,res)=>{
	res.send(routes.posts.getPosts(req,res))
})

app.post('/posts',(req,res)=>{
	if(!validate.isValidatePost(req))
	return res.send('Bad Request')
	res.send(routes.posts.addPost(req,res))
})

app.put('/posts/:postId',(req,res)=>{
	if(!validate.isValidatePost(req))
	return res.send('Bad Request')
	res.send(routes.posts.updatePost(req,res))
})

app.delete('/posts/:postId',(req,res)=>{
	res.send(routes.posts.deletePost(req,res))
})

app.get('/posts/:postId/comments',(req,res)=>{
	res.send(routes.comments.getComments(req,res))
})

app.post('/posts/:postId/comments',(req,res)=>{
	if(!validate.isValidateComment(req))
	return res.send('Bad Request')
	res.send(routes.comments.addComment(req,res))
})

app.put('/posts/:postId/comments/:commentId',(req,res)=>{
	if(!validate.isValidateComment(req))
	return res.send('Bad Request')
	res.send(routes.comments.updateComment(req,res))
})

app.delete('/posts/:postId/comments/:commentId',(req,res)=>{
	res.send(routes.comments.deleteComment(req,res))
})

app.listen(9000)