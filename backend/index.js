const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')

// db config 

const db = require('./config/keys').mongoURI


// connect mongodb 

mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology: true})
        .then(() => console.log('suceesfully connected '))
        .catch(err => console.log(err))

const app = express()

app.get('/',(req,res) => res.send('hello world ') )

// user routes 
app.use('/api/users',users)

const port  = process.env.PORT || 3000

app.listen(port,() => console.log(`server is running in ${port} `) )
