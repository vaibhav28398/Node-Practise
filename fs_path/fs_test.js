const fs=require('fs');
const path=require('path');
var a;
fs.readFile(path.join(__dirname,'/fs_test.js'),{encoding: 'utf-8'},function(error,data){
	a=data;
	
console.log(data);
});
fs.writeFile('msg.txt',"Hi",function(error){
	console.log("done");
});