
  'use strict';                     //strict is a literal expression ignored by earlier versions of js.with strict enabled you cannot use undeclared variables.
var http = require('http');       //built in function easiest way to include modules. Reads a js file executes the file, and returns the exports object. node.js provides an http module. Can be used to create an HTTP client of a server.
var port = process.env.PORT || 1337;  //process.env property returns an object containing the user enviroment
var net = require('net');
var url = require('url');
var asuka = require('./pLoad.js');


let connection;


//our function
function sendMsg(cmd, args = []) {
    connection.send(JSON.stringify({
    }))

}

/*asuka.conChk()*/
/*asuka.conConf();*/



asuka.Server();

asuka.Hello();
/*console.log(asuka.Text);*/
         //asuka.conChk();   //function (req, res)//
         //createserver is a web server object and is essential to this program. function thats passed into it is called once every http request that is made and is called the request handler
         //const proxy = http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

        // res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
         //asuka.conConf();//
    /*console.log('connection established!')*/
     //first argument 200, is a statuscode and the ones with single quotes are headers.//
   // res.end('Hello World\n'); //end prints string to screen*/
//}).listen(port);//listen is used to begin accepting connections//