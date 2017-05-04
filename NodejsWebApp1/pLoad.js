/*'use strict'; */                   //strict is a literal expression ignored by earlier versions of js.with strict enabled you cannot use undeclared variables.
var argv = process.argv;

if (~argv.indexOf('-h') || ~argv.indexOf('--help')) {
    console.log('Options:');
    console.log('-s - Show seconds.');
    console.log('-n - No leading zero on hours.');
    console.log('-d - Show date box.');
    console.log('--skinny - Skinny text.');
    return process.exit(0);
}








var asuka = require('./server');
var http = require('http');       //built in function easiest way to include modules. Reads a js file executes the file, and returns the exports object. node.js provides an http module. Can be used to create an HTTP client of a server.
var port = process.env.PORT || 1337;  //process.env property returns an object containing the user enviroment
var net = require('net');
var url = require('url');
const path = require('path');

/*var contrib = require('blessed-contrib');*/
/*var program = require('./program');*/
/*var screen = require('./widgets/screen');*/
var blessed = require('blessed')
    , screen = blessed.screen({
        autoPadding: true
    });

   
/*screen.title = 'Asuka VM';*/
/*var form = blessed.form({


}
);*/
/*exports.Server = function () {
    http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

        res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
        console.log('waiting on connection...')
        /*asuka.conConf();*/
        //console.log('connection established!')
        /*var screen = blessed.screen({ terminal: 'windows-ansi' });*/




        /*res.end('Hello World\n');
    }).listen(port);*/










var lastTime;

var positions = {};

var container = blessed.box({
    parent: screen,
    top: 'center',
    left: 'center',
    width: 'shrink',
    height: 9,
    //padding: 2,
    //border: {
    //  type: 'line',
    //  fg: 'black'
    //}
});
//UNDER MAINTENANCE/////
container.on('prerender', function () {
    var lpos = container._getCoords(true);
    if (lpos) {
        container.rleft = (screen.width - (lpos.xl - lpos.xi)) / 2 | 0;
    }
});
var date = blessed.box({
    parent: screen,
    top: 1,
    left: 1,
    //top: '80%',
    //left: 'center',
    width: 'shrink',
    height: 'shrink',
    border: {
        type: 'line',
        fg: 'black'
    }
});

date.hide();

var wid = ~argv.indexOf('--skinny') ? 1 : 2;
// var bch = ' ';
var bch = '?';
var inverse = true;

for (var i = 0; i < 10; i++) {
    var symbols = positions[i] = {};

    symbols[0] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[0],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[0],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[0],
        top: 0,
        right: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[0],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[0].hide();

    /**
     * One
     */

    symbols[1] = blessed.box({
        parent: container,
        top: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[1],
        top: 0,
        left: 'center',
        width: 2,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[1].hide();

    /**
     * Two
     */

    symbols[2] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[2],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[2],
        top: 0,
        right: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[2],
        top: 4,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[2],
        top: 4,
        left: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[2],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[2].hide();

    /**
     * Three
     */

    symbols[3] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[3],
        top: 0,
        bottom: 0,
        right: 0,
        width: wid,
        height: 9,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[3],
        top: 0,
        right: 0,
        left: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[3],
        top: 4,
        right: 0,
        left: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[3],
        top: 8,
        right: 0,
        left: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[3].hide();

    /**
     * Four
     */

    symbols[4] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[4],
        top: 0,
        bottom: 0,
        right: 0,
        width: wid,
        height: 9,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[4],
        top: 4,
        right: 0,
        left: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[4],
        top: 0,
        left: 0,
        width: wid,
        height: 4,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[4].hide();

    /**
     * Five
     */

    symbols[5] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[5],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[5],
        top: 0,
        left: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[5],
        top: 4,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[5],
        top: 4,
        right: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[5],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[5].hide();

    /**
     * Six
     */

    symbols[6] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[6],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[6],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[6],
        top: 4,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[6],
        top: 4,
        right: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[6],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[6].hide();

    /**
     * Seven
     */

    symbols[7] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[7],
        top: 0,
        bottom: 0,
        right: 0,
        width: wid,
        height: 9,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[7],
        top: 0,
        right: 0,
        left: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[7].hide();

    /**
     * Eight
     */

    symbols[8] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[8],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[8],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[8],
        top: 4,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[8],
        top: 0,
        right: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[8],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[8].hide();

    /**
     * Nine
     */

    symbols[9] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 10,
        height: 9
    });

    blessed.box({
        parent: symbols[9],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[9],
        top: 0,
        left: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[9],
        top: 4,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[9],
        top: 0,
        right: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[9],
        top: 8,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'default',
            inverse: inverse
        }
    });

    symbols[9].hide();

    /**
     * Colon
     */

    symbols[':'] = blessed.box({
        parent: container,
        top: 0,
        left: 0,
        width: 5,
        height: 9
    });

    blessed.box({
        parent: symbols[':'],
        top: 3,
        left: 'center',
        width: 2,
        height: 1,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols[':'],
        top: 6,
        left: 'center',
        width: 2,
        height: 1,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    symbols[':'].hide();

    /**
     * A
     */

    symbols['a'] = blessed.box({
        parent: container,
        top: 2,
        left: 0,
        width: 10,
        height: 7
    });

    blessed.box({
        parent: symbols['a'],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['a'],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['a'],
        top: 3,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['a'],
        top: 0,
        right: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    symbols['a'].hide();

    /**
     * P
     */

    symbols['p'] = blessed.box({
        parent: container,
        top: 2,
        left: 0,
        width: 10,
        height: 7
    });

    blessed.box({
        parent: symbols['p'],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['p'],
        top: 0,
        right: 0,
        height: 4,
        width: wid,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['p'],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['p'],
        top: 3,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'blue',
            inverse: inverse
        }
    });

    symbols['p'].hide();

    /**
     * M
     */

    symbols['m'] = blessed.box({
        parent: container,
        top: 2,
        left: 0,
        width: 10,
        height: 7
    });

    blessed.box({
        parent: symbols['m'],
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['m'],
        top: 0,
        left: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['m'],
        top: 0,
        right: 0,
        bottom: 0,
        width: wid,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    blessed.box({
        parent: symbols['m'],
        top: 0,
        bottom: 0,
        left: 'center',
        width: wid,
        ch: bch,
        style: {
            fg: 'black',
            inverse: inverse
        }
    });

    symbols['m'].hide();
}

function updateTime() {
    var pos = 0
        , d = new Date
        , im = 'am'
        , time
        , h
        , m
        , s;

    h = d.getHours();
    if (h >= 12) {
        im = 'pm';
    }
    if (h > 12) {
        h -= 12;
    }
    if (h === 0) h = 12;
    if (h < 10) {
        h = '0' + h;
    }

    m = d.getMinutes();
    if (m < 10) {
        m = '0' + m;
    }

    s = d.getSeconds();
    if (s < 10) {
        s = '0' + s;
    }

    time = ~argv.indexOf('-s')
        ? h + ':' + m + ':' + s + im
        : h + ':' + m + im;

    if (time === lastTime) return;
    lastTime = time;

    time = time.split('');

    if (~argv.indexOf('-n')) {
        if (time[0] === '0') time[0] = ' ';
    }

    Object.keys(positions).forEach(function (key) {
        var symbols = positions[key];
        Object.keys(symbols).forEach(function (key) {
            symbols[key].hide();
        });
    });

    time.forEach(function (ch, i) {
        var symbols = positions[i]
            , symbol = symbols[ch];

        if (!symbol) return;

        symbol.rleft = pos;
        pos += symbol.width + 2;

        symbol.show();
    });

    if (~argv.indexOf('-d')) {
        date.show();
        date.setContent(d.toISOString().replace(/\.\d+/, ''));
    }












    ///////////////////////
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
        content: 'Run server? Submit or cancel?'
        /*border: {    //makes green rectangle smaller//
          fg: 'green'
      }*/








    });
    ////////
    screen.append(form);
    form.on('click', function (data) {
        form.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
        screen.render();


    });








/////
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
    //server
    var serv = blessed.button({
        parent: form,
        mouse: true,
        keys: true,
        shrink: true,
        padding: {
            left: 1,
            right: 1
        },
        left: 0,
        top: 2,
        shrink: true,
        name: 'server',
        content: 'server',
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








/////
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
    serv.on('press', function () {
        asuka.Server();

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
    //PRESSING MORE THAN ONCE WILL GIVE ERROR. ONLY PRESS ONCE
    screen.key('s', function () {
        http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

            res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
            console.log('waiting on connection...')
            /*asuka.conConf();*/
            console.log('connection established!')
            /*var screen = blessed.screen({ terminal: 'windows-ansi' });*/




            res.end('Hello World\n');
        }).listen(port);



    });




    screen.render();
}
setInterval(updateTime, ~argv.indexOf('-s') ? 100 : 950);

updateTime();

screen.key('q', function () {
    process.exit(0);
});




















    /*exports.Server = function () {
        http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

            res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
            console.log('waiting on connection...')
            /*asuka.conConf();*/
            //console.log('connection established!')
            /*var screen = blessed.screen({ terminal: 'windows-ansi' });*/




           /* res.end('Hello World\n');
        }).listen(port);*/







   // }

    //exports.Hello = function () {

    //}
