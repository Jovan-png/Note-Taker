const express = require('express')
const app = express()
const {notes} = require('./db/db.json')
const path = require('path')
const PORT = process.env.PORT || 5000;

app.use(express.json())


app.get('/api/notes', (req, res)=>{
    res.json(notes)
})

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.post('/api/notes', (req,res)=>{
     const newNote = {
         title: req.body.title,
         text: req.body.text
     }
     if(!newNote.text || !newNote.text){
         res.status(400).json({msg: ERROR})
     }
     notes.push(newNote)
     res.json(newNote)
})

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(PORT, ()=>{
console.log(`Server Has Started On Port ${PORT}`)
} )