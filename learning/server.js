require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT ;

app.use(express.json())

//CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.post('/user', (req, res) => {
  const {name, email}= req.body;
  if(!name || !email ){
    return res.status(400).json({error: 'name and email are required fields'});
  }
  res.send(`hello ${name}!`); //pass next to handler
});

app.get('/user/:id', (req, res ) => {
  //logs every request to the console with the method, url, and timestamp
  const {id}= req.params;
  console.log(id);
  res.send(`User ID ${id}`); //pass next to handler
});

//app.post('/echo', (req, res) => {
  
    //res.json({echoed: req.body});
//});

app.get('/', (req, res) => {
  res.send('My Week 2 API!')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`) //use this to start the server with the command npm start
})