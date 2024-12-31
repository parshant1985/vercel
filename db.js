const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST
mongoose.connect(dbHOST)
  .then(()=>{
    console.log('Connected!')
   
    app.listen(3000)
  }).catch(()=> {
console.log('Connection failed')
  })