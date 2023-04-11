const personController = require('../controllers/person.controller');

module.exports = app => {
    app.get('/api', personController.index);
}