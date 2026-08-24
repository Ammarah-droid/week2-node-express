require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT ;

app.use(express.json())

app.get('/search', (req, res) => {
  const id= req.query.id;
  //logs every request to the console with the method, url, and timestamp
  console.log(id);
  res.send(id); //pass next to handler
});

app.get('/user/:id', (req, res ) => {
  //logs every request to the console with the method, url, and timestamp
  const id= req.params.id;
  console.log(id);
  res.send(id); //pass next to handler
});

//app.post('/echo', (req, res) => {
  
    //res.json({echoed: req.body});
//});

app.get('/', (req, res) => {
  res.send('Hello express!')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`) //use this to start the server with the command npm start
})