const express = require('express')
const app  = express()

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(proceess.env.PORT || 3000)