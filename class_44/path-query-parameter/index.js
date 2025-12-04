const express = require ('express');
const app = express ();



// app.get('/r/cat'  ,(req ,res)=>{
//     res.send('cat')
// })

// app.get('/r/dog'  ,(req ,res)=>{
//     res.send('dog')
// })
//path parameter -> (:)req.params -> object
// app.get ('/r/:macchar' , (req , res)=>{
//     console.log(req.params)//object
//     let {macchar} = req.params;
//     res.send(`req send at : ${macchar}`)
// })

//query parameter -> (?)req.query -> object
app.get('/search' , (req ,res)=>{
    console.log(req.query);
    let {bhagwan , wife} = req.query
    res.send (`query parameter agya ${bhagwan} and  ${wife}`)
})

app.listen(8080 , ()=>{
    console.log("server connected ar 8080")
})