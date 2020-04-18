const insertDocuments=(db,callback)=>{
	const collection=db.collection('db_eg')
	collection.insertMany([{name:'Bob'},{name:'john'},{name:'vaibhav'}],
		(error,result)=>{
			if(error) return process.exit(1)
			console.log(result.result.n)
			console.log(result.ops.length)
			console.log('Inserted')
			callback(result)
		})

}

const updateDocuments=(db,callback)=>{
	const collection=db.collection('db_eg')

	const query={ name: 'Bob'}
	const newvalues={$set:{grade:'A'}}

	collection.updateOne(query,newvalues,(error,result)=>{
		if(error) return process.exit(1)
		console.log("updated")
		callback(result)
	})
}

const deleteDocuments=(db,callback)=>{
	const collection=db.collection('db_eg')

	const query={name:'vaibhav'}
	collection.deleteOne(query,(error,result)=>{
		if(error)return process.exit(1)
		console.log('Deleted')
		callback(result)
	})
}

const findDocuments=(db,callback)=>{
	const collection=db.collection('db_eg')

	collection.find({}).toArray((error,result)=>{
		if(error)return process.exit(1)
		console.log(2,result.length)
		console.dir(result)
		callback(result)
	})
}
const MongoClient=require('mongodb').MongoClient

const url="mongodb://localhost:27017"

MongoClient.connect(url,(error,client)=>{
	if(error)
		return process.exit(1)
	const db=client.db('db_eg')
	db.collection('db_eg').drop((error,result)=>{
		if(error)return process.exit(1)
		if(result)
			console.log('Deleted')
		insertDocuments(db,()=>{updateDocuments(db,()=>{deleteDocuments(db,()=>{findDocuments(db,(a)=>{client.close()})})})})
	})
	console.log('Connection is made')
	

})
