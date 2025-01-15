

//Promise
//first class function
//why functions are called first class citizens in js

//image selection

let step1 = function(){
    console.log('selection image');
    return new Promise(function(resolve , reject){
      setTimeout(function(){
        resolve('image.jpg');
      } , 4000)   
    })
} 

let step2 = function(image){
    console.log(`applying filter to ${image}`);
    return new Promise(function(resolve , reject){
      setTimeout(function(){
        resolve('filter applied to image.jpg');
      } , 2000)   
    })
}

let step3 = function(filter){
    console.log(`adding caption to  ${filter}`);
    return new Promise(function(resolve , reject){
      setTimeout(function(){
        resolve('caption added');
      } , 3000)   
    })
}

let step4 = function(comment){
    console.log('image uploading plz wait');
    return new Promise(function(resolve , reject){
      setTimeout(function(){
        resolve('all done image uploading plz like and share');
      } , 5000)   
    })
}

// step1().then().catch()
//isse khte ha Promise chaining

step1()
.then(function(image){
    console.log('image selected')
    return step2(image);
})

.then(function(filter){
    console.log('filter applied')
    return step3(filter);
})

.then(function(comment){
    console.log(`${comment} to the image`);
     return step4(comment)
})

.then(function(final){
    console.log(final)
})
.catch(function(err){
    console.log(err)
})
