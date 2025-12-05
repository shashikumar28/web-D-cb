const express = require ('express')
const app = express();
const path = require ('path')

let arr = ["lecture" , "notes" , "pratice" , "meditation"];

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

app.get ('/' , (req , res)=>{
    res.render('todo' , {arr})
})

app.listen (8080 , ()=>{
    console.log("server is connected at port 8080")
})