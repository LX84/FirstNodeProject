'use strict';
//asynchronizaiton
var fs=require('fs');
fs.readFile('sample.txt', 'utf-8', function(err,data){
    if(err){
        console.log(err);
    }  else{
        console.log(data);
    }

});
console.log("1111");
console.log("==================")
//synchronization

try{
    var data=fs.readFileSync('sample.txt','utf-8');
    console.log(data);
}catch(err){
    console.log(err);
}
console.log("1111");
//write
var data='Hello,Node.js';
fs.writeFile("output.txt",data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});





