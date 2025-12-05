const express = require ('express')
const app = express();
const path = require ('path');

let arr = ['hi' , 'hello' , 'bye']

let rn = Math.floor(Math.random()*(25) + 6)

app.set ('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
//home
app.get ('/' , (req , res)=>{
    res.render('app')
})
//star
app.get('/star' , (req,res)=>{
    res.render('star' , {arr})
})
//rn
app.get('/random' , (req,res)=>{
    res.render('random' , {rn})
})

app.listen (8080 , ()=>{
    console.log("server connnected at port 8080")
})