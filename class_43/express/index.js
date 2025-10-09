// const fs = require('fs')
// const path = request('path')

// fs.writeFile('')
// path.join('shashi' , 'kumar')

//-----------------

const express = require('express')//function
//this appp is the entire instance of your application
const app = express();//return something -> main application object

//console.log('shashi bhai backend me maja aa rha ha ')
app.use((req , res)=>{ //cb
console.log("you made a request")
//console.log(req)
res.send('hi server ne respones bhejdiya ha')
} ) 
app.listen(8080 , ()=>{//portnumber , cb it accept
    console.log("server connected at port  go 8080 bhai sam")
})