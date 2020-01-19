module.exports = userTest;

router.get('/ok', (request, response) => {
    userTest()
    response.status(200).send();
})