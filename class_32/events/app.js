// function something(){
// console.log("mai to ji dabb gya")
// }

//-----------------------------

// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("jai hanuman gyan guun sagar")
// }

//or


// let btn = document.querySelector('button');
// let samarth = function(){
//     console.log("jai hanuman gyan guun sagar")
// }

// btn.onclick = samarth;

//--------------------

//interview question 

//  let btn = document.querySelector('button');


// function naacho (){
//     console.log("natu natu natttuu")
// }


// function gaayo (){
//     console.log("sa re ga ma pa dha ni sa")

// }

//ek event par ek kam


// btn.onclick = naacho;
// btn.onclick = gaayo;



// multiple kaam

//3rd method -->  3way  -> addEventlistner()

// btn.addEventlistner('click' , function()){
//}console.log("event chal gya")


//------------------------
// multiple function
//btn.addEventListener('click' , naacho);
//btn.addEventListener('click' , gaayo);



//---------------------------
//task

  let btn = document.querySelector('button');
  let body = document.querySelector('body');


  btn.addEventListener('click'  , function(){
    body.style.backgroundColor = " red"
  })



