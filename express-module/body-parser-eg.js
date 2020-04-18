const express=require('express')
const app=express()
const bodyParser=require('body-parser')

//curl -X POST -H "Content-Type:application/json" -d "{\"key\":\"value\"}" localhost:9000/a?api_key=1 -i  this req worked
app.use(bodyParser.json())

app.use((req,res,next)=>{
	if(req.query.api_key){
		console.log(req.body)
		next()
	}
	else{
		res.status(401)
		res.send('Not authporized')
	}
})	

app.post('/a',(req,res)=>{
	console.log(req.body)
	console.log('Inside post')
	res.send('Done')
})

app.listen(9000)