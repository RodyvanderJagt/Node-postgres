const express = require('express');
const app = express();
const port = 3000;

const db = require('./queries.js')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', db.getUsers);

app.get('/users/:id', db.getUserById);

app.post('/users', db.createUser);

app.put('/users/:id', db.updateUser);

app.delete('/users/:id', db.deleteUser);


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});




