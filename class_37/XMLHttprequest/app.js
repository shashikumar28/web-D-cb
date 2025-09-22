


//constructor function 

 let req = new XMLHttpRequest();


 //Request open 
 console.log(req);
 req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls');



 //request k oactually me bhejna
 req.send();

 //req.onerror = function(){}

 req.onload = function(respons){
    console.log(respons)

    console.log(this.response)
 }

