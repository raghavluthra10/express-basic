const path = require('path');
const express = require('express');
const app  = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname, '../public');
const partialPath = path.join(__dirname, '../views/partials');

app.set('view engine', 'hbs')
hbs.registerPartials(partialPath )

// app.use(express.static(staticPath))

app.get('', (req, res) => {
    res.render('index', {
        userName: 'raghav'
    });
});

app.get('/', (req, res) => {
    res.send('hello from home page')
})

app.listen(8000, () => {
    console.log('listing at 8000')
})

// API
// get - read
// post - create
// put - update
// delete - delete