const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random()*100)
    res.json({randomNumber})
})

app.listen(port,()=>{
    console.log(`server running at ${port} number`)
})