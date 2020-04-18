const http=require('http');
const url ='http://nodeprogram.com';
http.get(url,(response)=>{
	response.on('data',(chunk)=>{
		console.log(chunk.toString('utf-8'));
	});
	response.on('end',()=>{
		console.log("Response has been finished");
	});
}).on('error',(error)=>{
	console.error(`Not connected: ${error.message}`);
});