const express=require('express')
const app= express()
const bodyParser=require('body-parser')

app.use(bodyParser.json())

let profile={
	'Name':'Vaibhav',
	'Age':'22',
	'Sex':'Male'}

app.get('/profile',(req,res)=>{
	console.log('Get accepted')
	res.send(profile)
})

app.post('/profile',(req,res)=>{
	console.log('Post accepted')
	profile=req.body
	console.log(profile)
	res.send(profile)
})

app.put('/profile',(req,res)=>{
	Object.assign(profile,req.body)
	console.log('PUT accepted')
	console.log(profile)
	res.send(profile)
})

app.delete('/profile',(req,res)=>{
	console.log('DELETE accepted');
	profile={}
	res.send(profile);
})

app.listen(9000)