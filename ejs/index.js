const express=require('express');
const app=express();
app.set('view engine', 'ejs');

let a="erode";
let ar=['gh']

app.get('/',(req,res)=>{
    // res.send('sadfsaef') 
    res.render('a',{name:a,arr:ar})
})

app.listen(1500,console.log("server start"))