const express = require('express');

const app = express();

// Make the server/public folder
// available to who wants them
app.use(express.static('./server/public'));

app.listen(2000, () => {
    console.log('We\'re alive!');
});

console.log('in server.js');
