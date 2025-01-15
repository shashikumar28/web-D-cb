// using js ill maipualate html
//selectors
// document  -> html me se select kro is is way se

//way-1  -> getElementById

// let elem = document.getElementById(shashi);// h2 ->no❌
 let elem = document.getElementById("shashi");// h2-> yes
// only return 1 single entity -> 1st accurance



//---------------------------------------------
// styling


//alag alag same element par properties provide karna
//elem.style.color = "red";
//elem.style.backgroundColor = "green";
//elem.style.border = "10px solid black";

//ek sath element par proterties apply karna

// elem.style.cssText = `
// color : purple;
// font-size : 50px;
// background-color : gold;
//  `


 //-------------------------------------------------------


 //way-2  -> getElementBytagName -> return an array(html collection)

//  document.getElementsByTagName(h1)//no
 //let allheading = document.getElementsByTagName('h1')//yes

//  heading.style.color = "red"; directly ni use hoga --> use looping

// for(let heading of allheading){
//     heading.style.color = "red";
//     heading.style.backgroundColor = "orange";
// }

// for(let heading of allheading){
//     heading.style.cssText = `
//     color : "red";
//     background-color : green;
//     font-size : 100px
//     `;
// }


 //way-3 -> getElementByclassName -> return an array(html collection)

 let classEle = document.getElementsByClassName('sam');//array --> looping

 for(let elem of classEle){
    elem.style.textDecoration = "line-through"
 }


 //----------------------------------

//way-4 -> querySelector -> 3 in 1 kaam krta hai -> only 1 element ko select krta hai

// Id -> 
// let qs1 = document.querySelector('#shashi'); //single selector

//className -> 
// let qs2 = document.querySelector('.sam'); //single possible

//tagName ->
// let qs3 = document.querySelector('p'); //single possible

// ---------------------------------------------------------

//way-5 -> querySelector -> 3 in 1 kaam krta hai -> all the  element ko select krta hai

// Id -> 
let qs1 = document.querySelectorAll('#shashi'); // selects All

//className -> 
let qs2 = document.querySelectorAll('.sam'); //single possible

//tagName ->
let qs3 = document.querySelectorAll('p'); //single possible
