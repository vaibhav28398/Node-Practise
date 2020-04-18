const http=require('http');
const port=9000
http.createServer((req,res)=>{
	console.log(req.headers)
	console.log(req.statusCode)
	console.log(req.method)
	console.log(req.url)
	if(req.method=='POST')
	{
		let b=''
		req.on('data',(chunk)=>{
			b=b+chunk
		})
		req.on('end',()=>{
			console.log(`Req completed ${b}`)
			res.write('Post ho gya')
			res.end()
		})
	}
	else
	{
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.write('GET go gya')
		res.end()
	}
	
}).listen(port)