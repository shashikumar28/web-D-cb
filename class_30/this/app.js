

//regular functional invocation

// let obj = {
//     Number: 200,
//     fun:function(){
//         console.log(this)
//     }
// }

// 1. bina obj ke bhi this keyword exist krta ha

// this always depend on how it is being called.(khatam this)
// function fn(){
//     console.log(this)


//}
fn();//regular function calling ya invocation

//1. in case of regular function calling  -> "this" awlays point to the window object

//window  -> global  object  ->

//eg:

// function saraswat(){
//     console.log(this)
// }
// saraswat();

//------------------------------------------

//2. method invocation

// let obj = {
//     Number: 200,
//     fun:function(){
//         console.log(this)//obj
//     }
// }

// obj.fun(); //method invocation

// method invocation  -> this always points to the object it is being called upton

//eg:

// let obj2 = {
//     a:100,
//     sam:function(){
//         console.log(this)//obj2 ko target krega 
//     }
// }

// obj2.sam();

//direct function  ? --> no
//method invocation ? -> yes

//eg:
// let obj2 = {
//     a:100,
//     sam:function(){
//         console.log(this)
//     }
// }

// obj2.sam();
// let bhaukaal = obj2.sam;
// bhaukaal(); direct functiion  -> window


//eg 3

// let obj3 = {
//     a :10,
//      fn: function(){
//         console.log(this); // 1 obj3
//          function sam (){
//             console.log(this)// 2  => window direct calling
//          }
//          sam(); //direct function -> window

//      }
// }
// obj3.fn(); // method invocation


//--------------------------------------

//3. constructor invocation(easiest)
// constructor invocation -> "This" always points to the newly created object.
// function CreateObj(){
// this.x = 200;
// }

//  let obj = new CreateObj();//object create

//  console.log(obj.x);


//-----------------------------------------

//4. indirect invocation
//call()  --> argument are comma seperted
//  apply()

// let obj = {
//     sam: 20,
//     fn : function(a,b,c){
//          console.log(this,a,b,c)
//     }
// }

// let obj2 = {
//     sam :50,
// }

// obj.fn(1,2,3);//method invocation
// // call
// //yes  -> how ? -> call()
// //obj.fn();
// obj.fn.call(obj2)//  ->this -> obj2  -> change the context of this
// obj.fn.call(obj2 , 1,2,3)//  ->this -> obj2  -> change the context of this


///--------------------------------------
// applu
// call and apply are the same  --> change the context of this
// obj.fn.apply(obj2 , 1,2,3)❌
// obj.fn.call(obj2 , 1,2,3)
//obj.fn.apply(obj2 , [1,2,3])//apply me arr ke pass karna padta ha


//---------------------------------------
//bind

// let obj3 = {
//     fn : function (){
//         console.log(this)
//     }
// }

//  let myfun = obj3.fn.bind(obj3)//call no , assign yes

// console.log(myfun)
// myfun();

//----------------------

// let obj3 = {
//     fn : function (){
//         console.log(this)
//     }
// }
// function fn3(){
//     console.log(this)
// }

// // fn();
// let fn4 = fn3.bind(100);
// fn4();

//-------------------------------

//5. arrow function

// let obj5 ={
//     fn : function (){
//        console.log(this) 
//     }
// }

// obj5.fn();//method invocation

//eg:

// let obj5 ={
//     fn : function (){
//         function sam (){
//             console.log(this)
//         }
//         sam();//direct calling
//     }
// }

// obj5.fn();

// eg:3
// -> arrow function -> this refer to the
// let obj5 ={
//     fn : function (){
//         console.log(this)
//         let sam = () => {
//             console.log(this)//obj5
//         }
//         sam();//direct calling
//     }
// }

// obj5.fn();

//eg:4
//window
let obj5 ={
    fn :  () =>{
        console.log(this)
        let sam = () => {
            console.log(this)//obj5
        }
        sam();//direct calling
    }
}

obj5.fn();