const express = require('express');
const cors = require('cors');
const app = express();
const product = require('./routes/product.routes');
const person = require('./routes/person.routes');

require('./config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

product(app);
person(app);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});