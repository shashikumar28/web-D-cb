// 3rd party library -> saara data -> promise reutnrn
// axios - returns a promise and waits for the entire data at once


axois.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(respons){
    console.log(respons)
})
.catch(function(error){
    console.log(error   )
})