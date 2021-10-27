let express = require('express');

let app = express();
let staticController = require('./controllers/static');
let usersController = require('./controllers/users');
app.use('/assets', express.static(__dirname+'/files'));

staticController(app,__dirname);
usersController(app,__dirname);
app.listen(3000);