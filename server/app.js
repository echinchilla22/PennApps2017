var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var helloworld = require('./routes/helloworld.js'); // Include our index.js file from 'routes' folder.
var search = require('./routes/search.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the 'public' folder.
app.set('views', path.join(__dirname, 'views')); // Make sure we have the right 'views' folder defined.

app.use('/api/helloworld', helloworld); // Serve the index page.
app.use('/api/search', search);

app.listen(3001);
console.log('Server running on port 3001');
