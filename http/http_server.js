const http=require('http')

const port=9000

http.createServer((req,res)=>{
	res.writeHead(200, {'Content-Type': 'text/plain'})
	console.log('Hi')
	res.write('HellowRofl')
	res.end()
}).listen(port)

console.log('Server started')