const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'suren2025',
    database: 'new_db'
});


app.get('/',(req,res)=>{
    return res.json('This is the server running from the back-end side,whoooooo hoooooo'); 
})

app.get('/info',(req,res)=>{
    const sql = "SELECT * FROM info";
    db.query(sql,(err,data)=>{
        if(err){
            return res.json(err);
        }else{
            return res.json(data);
        }
    })
})


app.listen(8081,()=>{
    console.log('Server running on port 8081');
})