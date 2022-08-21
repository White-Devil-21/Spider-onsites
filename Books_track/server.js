const express = require('express')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
require('dotenv').config()

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Delta_21',
    database: 'book_data'
})

db.connect((error)=>{
    if(error) throw error
    console.log("Database connected")
})

app.use(express.json())
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    let sql = "SELECT * FROM books"
    db.query(sql, (error, rows)=>{
        if(error){
            res.sendStatus(500)                        
        }
        res.render('index.ejs', {data: rows})        
    })    
})

app.post('/', (req, res)=>{
    let sql = "INSERT INTO books(bname) VALUES (?)"
    db.query(sql, [[req.body.note]], (error, result)=>{
        if(error){
            res.sendStatus(400)
        }
        console.log(result)
    })
    res.redirect('/')
})


app.listen(3100)

