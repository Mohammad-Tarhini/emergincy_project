const express =require('express');
const app=express();
const db=require("./database.js").connectdb;

db()

app.use(express.json())
app.listen(3000,()=>
console.log("server is run on port 3000"))
