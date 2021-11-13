const express = require('express')
const app = express()
const {notes} = require('./db/db.json')
const path = require('path')
const PORT = process.env.PORT || 5000;


app.get('/api/notes', (req, res)=>{
    res.json(notes)
})

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
})


app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(PORT, ()=>{
console.log(`Server Has Started On Port ${PORT}`)
} )