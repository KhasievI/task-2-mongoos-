const mongoose = require("mongoose");
const express = require('express');

const app = express();

app.use(express.json())
const port = 3002;
app.use(require('./route/students.route'))

mongoose.connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/Students")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('ecbaby')
})

