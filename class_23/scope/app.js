

// var b =20;
// function a (){
//     console.log(b);
// }
// a();

//----------------
// function outer (){
//     var b = 20;
//     inner ();
//     function inner (){
//         console.log(b);
//     }
// }
// outer();

//------------------------------


function outer (){
    var b = 20;
    inner ();
    function inner (){
        var b= 100;
        console.log(b);
    }

    console.log(b);
}
outer();

//-----------------------

// function outer (){
//     var b = 20;
//     //inner ();
//     //function inner ()
//     {
//         var b= 100;
//         console.log(b);
//     }

//     console.log(b);
// }
// outer();