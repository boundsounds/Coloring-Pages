const express = require('express'); // import express
const dotenv = require('dotenv').config(); // import dotenv
const port = process.env.PORT || 5000; // set port

const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/openai', require('./routes/openaiRoutes')); 

app.listen(port, () => console.log('Server started on port ' + port));
