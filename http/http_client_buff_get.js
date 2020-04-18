const http=require('http');
const url='http:nodeprogram.com';
http.get(url,(response)=>{
	let rawData="";
	response.on('data',(chunk)=>{
		rawData=rawData+chunk;
	});
	response.on('end',()=>{
		console.log(rawData);
	});
}).on('error',(error)=>{
	console.error(`Not connected: ${error.message}`);
});