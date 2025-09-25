 let pi = 3.145;
 
 
 
 
 const ans1 = num => num*num;

 const ans2 = (a, b) => a+b;



 console.log(pi)
 console.log(ans1(5))
  console.log(ans2(3,4))


  //when u do not export anything from ur file by default empty object is being send

//   module.exports = {}//by default

//  module.exports = {
//     pi : pi ,
//     ans1 : ans1 ,
//     ans2 : ans2
//  } /// aise to hamesha likhte ha 

// module.exports = {
//      pii : pi  ,
//     ans1,
//     ans2 
//  } //aise bhi likh sakte ha 

module.exports = "shashi"