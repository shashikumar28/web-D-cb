

// function myFunc(){
// let username = "goli beta";

// function masti(){
//     console.log(username + 'masti nhi')
// }
// masti();//calling
// }
// myFunc();

//==========================

//whenever we return a function , that function is never returned alone .
// it always returns with the lexical environment along with it.

//----------------------closure--------------

function myFunc(){
    let username = "goli beta";
    
    function masti(){
        console.log(username + 'masti nhi')
    }
     return masti;//return
    }
     let returnFunc = myFunc(); 

     returnFunc()