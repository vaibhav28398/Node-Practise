const url = process.argv[2];

const http=require('http')
const fs=require('fs')
const uuid=require('uuid/v1')
const path=require('path')

http.get(url,(res)=>{
	let b=""
	res.on('data',(chunk)=>{
		b=b+chunk
	})
	res.on('end',()=>{
		let fileName=uuid()
		fileName=fileName+".html"
	
		fs.writeFile(fileName,b,()=>{
			console.log("done")
		});
	})
}).on('error',(error)=>{
	console.error(error.message);
})