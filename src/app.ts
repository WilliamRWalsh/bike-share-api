import express = require('express');
import morgan = require('morgan');

const userTest = require('./controllers/user-controller')

const app = express();
const router = express.Router();

/* Pipeline */
app.use(morgan('tiny'));
app.use('/api', router);

/* Sanity Check */
router.get('/ok', (request, response) => {
    userTest()
    response.status(200).send();
})

router.get('/okk', userTest)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

