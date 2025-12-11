const express = require ('express')//function
const app = express ();//object
const path = require('path')//node ka module already present
const methodOverride = require('method-override')//for put/patch/delete

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

app.use(methodOverride('_method'))//method override


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


//tast 4 -> to show a particular comment in the DB/ARRAY. -> req.params
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params)
    let {commentId} = req.params;
    let foundcomment = comments.find((comment)=>{
        // console.log(Comment.id);
        // console.log(commentId);
        // return comment.id === commentId;
        // return comment.id == parseInt(commentId)//way - 1
        return comment.id == parseInt(commentId)// way -2


    })
    // res.send(foundComment)
    // console.log(foundcomment)



    res.render('show',{foundcomment})
})



//task 5 -> to show a the edit form

app.get('/comments/:commentId/edit' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId);
    })
    res.render('edit' , {foundComment})
})


//task -6. to acually edit in the DB/ARRAY
app.patch('/comments/:commentId' , (req,res)=>{
    let{commentId} = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId);
    })
    let {comment} = req.body;//post
    foundComment.comment = comment;
    res.redirect('/comments')

})

//TASK-7 -> to actually delete from the DB/ARRAY
app.delete('/comments/:commentId', (req,res)=>{
    let {commentId} = req.params;
    let newcomments = comments.filter((comment)=>{return comment.id != commentId});
    comments = newcomments;
    console.log(newcomments, 'sam')
    res.redirect('/comments')
})



let PORT = 5050;
app.listen(PORT , ()=>{//listener
    console.log(`server connected at port :${PORT}`)
})





// SUMMARY in short for this code

// Express + EJS setup hua

// Static files (CSS/JS) set kiye

// Middleware se form data handle kiya

// /comments → saare comments dikhta hai

// /comments/new → new comment form

// /comments POST → new comment add hota hai

// Redirect karke list wapas dikha deta hai