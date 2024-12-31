const mongoose = require('mongoose');
const dbHOST = 'mongodb+srv://parshantconnect:n1QtcedBGV9PSzz1@userdetails.vd3h9.mongodb.net/myUsers?retryWrites=true&w=majority&appName=UserDetails';
mongoose.connect(dbHOST)
  .then(()=>{
    console.log('Connected!')
   
    app.listen(3000)
  }).catch(()=> {
console.log('Connection failed')
  })