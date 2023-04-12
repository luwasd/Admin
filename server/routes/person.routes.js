const personController = require('../controllers/person.controller');

module.exports = app => {
    app.get('/api', personController.index);
    app.post('/api/person', personController.createPerson);
    app.get('/api/people', personController.getAllPeople);
    app.get('/api/person/:id', personController.getPerson)
}