const express=require('express')
const MongoClient=require('mongodb').MongoClient
const body_parser=require('body-parser')
const app=express()

const url="mongodb://localhost:27017"
var collection=""
MongoClient.connect(url,(error,client)=>{
	if(error)
		throw error
	const db=client.db('Api_Db')
	collection=db.collection('APi_coll')
	console.log('Connection made')

})
app.use(body_parser.json())

const insertDocuments=(req,collection,callback)=>{
	collection.insertOne(req.body,(err,res)=>{
		if(err) throw err
		console.log('Inserted')
	callback(res)
	})
}

const findDocuments=(req,collection,callback)=>{
	collection.find({}).toArray((error,result)=>{
		if(error)return process.exit(1)
		console.log(2,result.length)
		console.dir(result)
		callback(result)
	})
}

const updateDocuments=(req,collection,callback)=>{
	console.log(req.params.id)
	var query={}
	query['id']=req.params.id
	collection.updateOne(query,{$set: req.body},(err,res)=>{
		if(err) throw err
		console.log('updated')
	callback(res)
	})
}

const deleteDocuments=(req,collection,callback)=>{
	const query={id: req.params.id}
	collection.deleteOne(query,(err,res)=>{
		if(err) throw err
		console.log('deleted')
	callback(res)
	})
}
app.get('/accounts',(req,res)=>{
	findDocuments(req,collection,(result)=>{
		res.send(result)
	})
})

app.post('/accounts',(req,res)=>{
	insertDocuments(req,collection,(result)=>{
		res.send('Posted')
	})
})

app.put('/accounts/:id',(req,res)=>{
	updateDocuments(req,collection,(result)=>{
		res.send(result)
	})
})

app.delete('/accounts/:id',(req,res)=>{
	deleteDocuments(req,collection,(result)=>{
		res.send(result)
	})
})

app.listen(9000)