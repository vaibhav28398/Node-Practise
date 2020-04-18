const express=require('express')
const app=express()

//the following is middle ware
app.use((req,res,next)=>{
	console.log(`${req.method}: ${req.url}`)
	next()
})

//can have multiple middlewares
app.use((req,res,next)=>{
	if(req.query.api_key){
		next()
	}
	else{
		res.status(401)
		res.send('Not authporized')
	}
})

//the following is route
app.get('/',(req,res)=>{
	res.send('Hello world')
})

//suppose only this want to have a middleware
app.get('/accounts',(req,res,next)=>{
	console.log('accounts inline middleware')

	//can also directly jump to error
	next(new Error('oops'))
},(req,res)=>{
	res.send('Hello world:accounts')
})

app.get('/transactions',(req,res)=>{
	res.send('Hello world: transactions')
})

//error handling
app.use((error,req,res,next)=>{
	res.status(500)
	res.send(error)
})
app.listen(9000)