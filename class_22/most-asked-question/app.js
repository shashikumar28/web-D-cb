// var a = 20;

// function mereFunction(){
//     console.log("inside mereFunction")
// }

// console.log(a)
// mereFunction();



//------------------------


//-----------------------hoisting---------------------
// whenever we access the variable or the function
//  before its declaration then it is called hoisting

// console.log(a)//use
//  mereFunction();//use


// var a = 20;

//  function mereFunction(){//define
//      console.log("inside mereFunction")
//  }



//---------------------------------

// hoisting4

function a(){
    console.log(b);
    var b = 100;
}

a();

 