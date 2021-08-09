'use strict';

// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const validatorFunction = require('./middlewares/validator')

const app = express();

// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('this is home page!!! :D :D :D')
});

app.get('/person', validatorFunction(), (req, res) => {
   const name = req.query.name
//    console.log(name)
res.json({
    name:name
})
})



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}