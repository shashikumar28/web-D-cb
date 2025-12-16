const express = require('express');
const app = express();
// const path = require('path')


app.use(express.json());


app.get( '/', ( req, res)  => {
    res.send('hello how are you');
})

app.post( '/', (req, res)  => {
    const data = req.body;
    console.log('data' , data);
    res.send('posting')
})



app.listen(8080 , () =>{
    console.log('server is started post 8080')
})