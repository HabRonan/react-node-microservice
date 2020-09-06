const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const port = 4003;

app.use(bodyParser.json());

app.post('/events', (req, res) => {

})

app.listen(port, () => {
    console.log('listening on ' + port)
})
