const users = require('../routes/users-route')

module.exports = function(app: any) {
    app.use('api/users', users);
}