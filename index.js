const express = require('express');
const app = express();
const User = require('./model/user.model')
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('First api running VERSEL APP');
});
app.get('/ping', (req, res) => {
    res.send('<=PONG=>');
});
app.get('/country', (req, res) => {
    res.send('<=INDIA=>');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products


app.use(express.json())
app.get('/', (req, res)=> {
    res.send("Hello We connected to mongo DB")
  });

//get users

app.get('/api/users', async (req, res)=> {
    try {
     const users =  await User.find({})
     res.status(200).json(users)
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }
});

// single user product

//product deleted API



  app.post('/api/users', async(req, res)=> {
    try {
        const data = await User.create(req.body)
        res.status(200).json(data)
    }
    catch(error) {
        res.status(500).json({error:error.message + 'dhanu'})
    }
  
  })

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})