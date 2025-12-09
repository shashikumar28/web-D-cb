const express = require ('express')//function
const app = express ();//object
const path = require('path')//node ka module already present

let comments = [
    {
        id:0,
        username : 'sam',
        comment : 'a good devloper'

    },

     {
        id:1,
        username : 'shahi',
        comment : 'a good boy'

    },

     {
        id:2,
        username : 'sammy',
        comment : 'a good dev person'

    },

     {
        id:3,
        username : 'kumar',
        comment : 'a good person'

    },
]

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))//tempplate
app.use(express.static(path.join(__dirname , 'public')))//public. -> static -> files

//body parsing middlewares->
// app.use(express.json()) -> for json data
app.use(express.urlencoded({extended: true})) //-> for frm data


//Restful route according to the restful table -> right to left
// Task-1 -> show all the comments  -> where all my comments -> DB -> Array
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments})
})

// Task-2 -> show form for new comments
app.get('/comments/new' , (req,res)=>{
    res.render('new')
})

// Task -> 3 to actually add the comment in DB/Array
app.post('/comments' , (req,res)=>{
    console.log(req.body); //by default -> undefined -> to change i use middleware
let {username, comment} = req.body;
    // comments.push({username:username, comment:comment, id:comments.length});
comments.push({username, comment, id:comments.length}) //ES6 ka syntax hai
// res.send(req.body)
res.redirect('/comments') // get req gyi /comments pr

})



let PORT = 5050;
app.listen(PORT , ()=>{//listener
    console.log(`server connected at port :${PORT}`)
})