
// website name for jquery documenttenion name -> jquery.com

//console.log($)//--> $ === jquery

//slection
let h1 = $('h1');// document.querySelectorAll('h1')
//Id
let iddd = $('#sam')

//class
let kilaas = $('.samarth');

// select p
// let para = $('p');  


//-------------------
//manipulation

// para.css('color' , 'red')
// para.css('border' , '2px solid black')
// para.css('background-color' , 'yellow')

// // better approch
// para.css({
//     color: 'blue',
//     border: '5px solid green',
//     fontSize : '40px',
//     backgroundColor : "pink"
// })

// //------------------------------
// // accessing text
// // getter
// console.log(para.text())//brainless -> textcontent

// //setter
// para.text('FILMO KE SARE HERO  MERE AAGE HA ZERO')

// // getteer + setter
// console.log(para.html())//-> innerhtml

//-------------------------------------
// attributes --> attr

// let inp = $('input');
// //getatribute // getter
// console.log(inp.attr('type'))
// console.log(inp.attr('id'))

// // setAtribute // setter  -> 2 (jis , jisse)
// // inp.attr('type' , 'color')
// // inp.attr('type' , 'date')
// // inp.attr('type' , 'checkbox')

// //-------------------------------------------
// // selecting first and last Element
// // let lis = $('ul li');
// //  lis.css('color' , 'green')
// let lis = $('ul li').first(); 
// lis.css('color' , 'green')

// //let lis = $('ul li').first();
// let liss = $('ul li').last();
// liss.css('color' , 'red')


//--------------------------------------

// let inp = $('input');
// console.log(inp.val());//getter
// inp.val('me nahi batunga')//setter 

//-------------------------------------
// class attributes

// CLASSLIST.ADD  , CLASSLIST.REMOVE


let para = $('p')  // setter p 


//add
// para.addClass('a')
para.addClass('a,b,c')//yes
// para.addClass('a','c') no

//remove
//  para.removeClass('a')
//  para.removeClass('a b c')


//toggle
// para.toggleClass('a')
// para.toggleClass('a b')

// hasClass

console.log(para.hasClass('a'))//hogi to true ni to false




