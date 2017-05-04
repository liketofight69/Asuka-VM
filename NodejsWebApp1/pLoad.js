/*'use strict'; */                   //strict is a literal expression ignored by earlier versions of js.with strict enabled you cannot use undeclared variables.
var http = require('http');       //built in function easiest way to include modules. Reads a js file executes the file, and returns the exports object. node.js provides an http module. Can be used to create an HTTP client of a server.
var port = process.env.PORT || 1337;  //process.env property returns an object containing the user enviroment
var net = require('net');
var url = require('url');
/*var program = require('./program');*/
/*var screen = require('./widgets/screen');*/
var blessed = require('blessed')
, screen = blessed.screen();

   
/*screen.title = 'Asuka VM';*/
/*var form = blessed.form({


}
);*/




exports.answer = 42;
exports.Text = 'waiting on connection...';
exports.conChk = function () {
    console.log('waiting on connection...');




}






exports.conConf = function () {
    console.log('connection established!');



};
var form = blessed.form({
    parent: screen,
    cursor: 'block',
    cursorBlink: true,
    keys: true,
    left: 0,
    top: 0,
    width: 30,
    height: 4,
    border: 'line',
    fg: 'default',
    bg: 'green',
    content: 'Submit or cancel?'
      /*border: {    //makes green rectangle smaller//
        fg: 'green'
    }*/








});
[form].forEach(function (term) {
    term.enableDrag(function (mouse) {
        return !!mouse.ctrl;



    });
    term.on('title', function (title) {
        screen.title = title;
        term.setLabel(' ' + title + ' ');
        screen.render();




    });
    term.on('click', term.focus.bind(term));
    });

//add png icon to the form//
/*var icon = blessed.image({
    parent: form,
    top: 0,
    left: 0,
    type: 'overlay',
    width: 'shrink',
    height: 'shrink',
    file: __dirname + '/asuka.png',
    search: false
});*/











var submit = blessed.button({
        parent: form,
        mouse: true,
        keys: true,
        shrink: true,
        padding: {
            left: 1,
            right: 1
        },
        left: 10,
        top: 2,
        shrink: true,
        name: 'submit',
        content: 'submit',
        style: {
            bg: 'blue',
            focus: {
                bg: 'red'
            },
            hover: {
                bg: 'red'
            }
        }
    });
    var cancel = blessed.button({
        parent: form,
        mouse: true,
        keys: true,
        shrink: true,
        padding: {
            left: 1,
            right: 1
        },
        left: 20,
        top: 2,
        shrink: true,
        name: 'cancel',
        content: 'cancel',
        style: {
            bg: 'blue',
            focus: {
                bg: 'red'
            },
            hover: {
                bg: 'red'
            }
        }
    });

    submit.on('press', function () {
        form.submit();
    });

    cancel.on('press', function () {
        form.reset();
    });

    form.on('submit', function (data) {
        form.setContent('Submitted.');
        screen.render();
    });

    form.on('reset', function (data) {
        form.setContent('Canceled.');
        screen.render();
    });

    screen.key('q', function () {
        process.exit(0);
    });

    screen.render();






















    exports.Server = function () {
        http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

            res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
            console.log('waiting on connection...')
            /*asuka.conConf();*/
            console.log('connection established!')
            /*var screen = blessed.screen({ terminal: 'windows-ansi' });*/




            res.end('Hello World\n');
        }).listen(port);







    }

    exports.Hello = function () {

    }
