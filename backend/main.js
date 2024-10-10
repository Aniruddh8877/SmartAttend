const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const{signup , login}=require('./controllers/authControllers');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/signup', signup);
app.post('/login', login);



mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("Connected to MongoDB successfully.");
        app.listen(process.env.PORT || 5000, (err) => {
            if (err) console.log(err);
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch((error) => console.log("Failed to connect", error));
