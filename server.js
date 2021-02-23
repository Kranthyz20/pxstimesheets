const path = require('path');
const cookieParser = require('cookie-parser')
const express = require('express');
const app = express();

//Update me for Testing in Localhost
var debugPerId = 'id851321';
var debugProfile = 'PP00001';

app.use(cookieParser());

app.use(function (req, res, next) {
    if (req.headers.host.includes('localhost')) {
        res.cookie('Userid', debugPerId, { maxAge: 86400 * 1000, httpOnly: false, secure: false });
        res.cookie('Usergroups', debugProfile, { maxAge: 86400 * 1000, httpOnly: false, secure: false });
    }
    else {
        if (req.headers['iv-user']) {
            res.cookie('Userid', JSON.stringify(req.headers['iv-user']), { maxAge: 86400 * 1000, httpOnly: true, secure: true });
        }
        if (req.headers['iv-groups']) {
            res.cookie('Usergroups', JSON.stringify(req.headers['iv-groups']), { maxAge: 86400 * 1000, httpOnly: true, secure: true });
        }
    }
    next();
});

app.use(express.static(path.join(__dirname, 'dist/Timesheets')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Timesheets/index.html'));
});

// SERVER
const http = require('http');
const server = http.createServer(app);
server.listen(8080, 511, () => console.log(`Running on 8080`));
// SERVER