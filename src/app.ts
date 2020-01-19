import express = require('express');
import morgan = require('morgan');
import mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bikeshare')
    .then(() => console.log('Connected to DB...'))
    .catch(err => console.error('Could not connect to DB...', err))

const app = express();
const router = express.Router();

/* Pipeline */
app.use(morgan('tiny'));
require('./startup/routes')(app)

/* Sanity Check */
router.get('/ok', (request, response) => {
    response.status(200).send();
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

