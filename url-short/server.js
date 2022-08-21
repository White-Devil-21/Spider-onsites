const express = require('express')
const mysql = require('mysql')
const shortid = require('shortid')
const app = express()
app.use(express.json())
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Delta_21',
    database: 'url_short'
})

db.connect((error)=>{
    if(error) throw error
    console.log("Database connected")
})

app.get('/', (req, res)=>{
    res.render('index.ejs')
})


app.post('/', (req, res)=>{
    let sql2 = "INSERT INTO urls(orig, short) VALUES (?)"
    var newId = shortid.generate()
    db.query(sql2, [[req.body.url, newId]], (error, result)=>{
        if(error) throw error
        console.log(result)
    })
    res.render('new.ejs', {data: newId})   
})

app.get('/alter', (req, res)=>{
    let sql = "ALTER TABLE urls MODIFY COLUMN orig VARCHAR(200)"
    db.query(sql, (error, result)=>{
        if(error) throw error
        console.log(result)
    })
    res.send("Altered")
})

app.listen(100)