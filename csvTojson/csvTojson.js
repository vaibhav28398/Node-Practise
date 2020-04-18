const fs=require('fs')
const path=require('path')
const csv=require('csvtojson')

csv().fromFile(path.join(__dirname,'customer-data.xls')).then((json)=>{
	const p=JSON.stringify(json)
	console.log(p)
	fs.writeFile('json.json',p,()=>{
		console.log("File Written")
	})
})
