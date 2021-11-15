const express = require('express')
const app = express()
const {notes} = require('./db/db.json')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/notes', (req, res)=>{
    res.json(notes)
})
// Makes /notes display notes.html
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/notes/:id', (req, res)=>{

       res.json(notes.filter(notes => notes.id === parseInt(req.params.id)))
})

// Creates new Note with unique ID.
app.post('/api/notes', (req,res)=>{
     const newNote = {
         id: req.body.id = notes.length.toString(),
         title: req.body.title,
         text: req.body.text
     }
     notes.push(newNote)
     res.json(newNote)
})



// Makes the default page "index.html"
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Creates the server on a certain PORT
app.listen(PORT, ()=>{
console.log(`Server Has Started`)
} )