const { log } = require('console');
const express = require('express');
const { CLIENT_RENEG_LIMIT } = require('tls');
const app = express();

//middleware. -> function   -> har incoming request par chalta ha
// app.use((req , res) =>{ // path is not speicified
//     res.send('<h1>Hi i am a middleware </h1>')
// })
//top to bottom. -> code flow
// app.use('/cat' , (req , res) =>{ // path is not speicified
//     res.send('<h1>Hi i am cat middleware </h1>')

// })
// adv middleware
app.use('/cat' , (req , res , next) =>{ // path is not speicified
    console.log('Hi i am cat middleware')
    next();//agle middleware (function) par bhejdo

})
//GET. -> PATH , CB FUNCTION
app.get('/samarth' , (req, res)=>{
    res.send("<h2>hi i am a samarth</h2>")
})
app.get('/cat' , (req,res)=>{
    res.send('get request from /cat aagyi')
})
//for all the left over paths
app.use((req, res) => {
  res.status(404).send('error page 404');// isliye ya likhte ha ab
});
// app.get('/', (req , res)=>{
//     res.send('error page 404')
// }) app.get('*', ...) wala pattern Express 5 me valid nahi raha
// (Express 5 path-to-regexp ka naya version use karta hai, jisme "*" alone allowed nahi hai.)


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`)
})