
///most widely used technique for api calling

//web api  -> which return a promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(respons){
    // respons   /// meta data
     return respons.json()//parses the data and retrun a promise  -> saare packets ka wait
})
.then(function(data){
    console.log(data);
})

.catch(function(error){
    console.log(error)
})


//fetch -> bu default  ->  get  -> promise return krta ha
//json ()  -> promise return krta (wait krta ha) + parases the data