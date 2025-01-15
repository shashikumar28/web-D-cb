


// b();//yes
// console.log(a);//yes

// var a = 30;
// function b(){
//     console.log(c);//yes total hoisting is 3
//     var c = 100;
// }

// accessing a varible/ function  before its declaration

//------------------------

// let a = 10; 
// console.log(a);//no hoisting

// function b() {
//     console.log("aa dekkhte ha kisme kitna ha dum")
// }

// b();//no hoisting



//-------------------

// let a = a; //declar ---> js engine ----> undefined -->let a = undefined
//  console.log(a);//no hoisting
//  a = 100;//reinilitise

// function b() {
//     console.log("aa dekkhte ha kisme kitna ha dum")
// }

//  b();//no hoisting



// --------------------


//  const = a; //declar ---> js engine ----> undefined -->let a = undefined
//  console.log(a);//no hoisting
//  a = 100;//reinilitise  --> invalid ---> const in case

// function b() {
//     console.log("aa dekkhte ha kisme kitna ha dum")
// }

//  b();//no hoisting



// ---------------------------

// console.log(sam);
// a();

// var sam = 100;
// function a (){
//     console.log("inside a")
// }


// -----------------------


// console.log(sam);
// a();

// let sam = 100;//delrative change
// function a (){
//     console.log("inside a")
// }


// -------------------



// console.log(a);
// var a;
// a=1000;
// console.log(a);



// console.log(a); //error
// const a = 1000; //-> error -> dead temporal zone || temporal dead zone
// // a=1000;
// console.log(a); //1000

// 1. error ✅  kyuki js ek interpretret language ha 
// 2. error 1000
// 3. undefined 1000
// 4. 1000 1000