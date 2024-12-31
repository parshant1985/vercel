const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./model/user.model')
require('dotenv').config()
require('./db');
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World update server')
})

app.get('/api/users', async (req, res)=> {
  try {
   const users =  await User.find({})
   res.status(200).json(users)
  }
  catch(error) {
      res.status(500).json({error: error.message})
  }
});


app.post('/api/users', async(req, res)=> {
  try {
      const data = await User.create(req.body)
      res.status(200).json(data)
  }
  catch(error) {
      res.status(500).json({error:error.message + 'dhanu'})
  }

})
