const express = require('express');

const app = express();

let comments = [
    'servers yayyy',
    'actually tho',
    'helooooo?'
]

// Make the server/public folder
// available to who wants them
app.use(express.static('./server/public'));

app.get('/comments', (req, res) => {
    console.log("Gimme some comments");

    res.send(comments);

});

app.get('/comments/first', (req, res) => {
    console.log('in /comments/first');

    res.send(comments[0]);
});

app.listen(2000, () => {
    console.log('We\'re alive!');
});

console.log('in server.js');
