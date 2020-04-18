const express=require('express')
const app= express()
const bodyParser=require('body-parser')

app.use(bodyParser.json())

let profile=[{
	'Name':'Vaibhav',
	'Age':'22',
	'Sex':'Male'}]

app.get('/profile',(req,res)=>{
	console.log('Get accepted')
	if(req.query.id)
		return res.send(profile[req.query.id])
	res.send(profile)
})

app.post('/profile',(req,res)=>{
	console.log('Post accepted')
	profile.push(req.body)
	console.log(profile)
	res.send(profile)
})

app.put('/profile/:id',(req,res)=>{
	Object.assign(profile[req.params.id],req.body)
	console.log('PUT accepted')
	console.log(profile[req.params.id])
	res.send(profile)
})

app.delete('/profile/:id',(req,res)=>{
	console.log('DELETE accepted');
	profile.splice(req.params.id,1)
	res.send(profile);
})

app.listen(9000)