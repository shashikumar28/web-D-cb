

//getattribute   --> getter



 let anchor = document.querySelector('a');

 console.log(anchor.getAttribute('href'))//specify the attribute

 let inp = document.querySelector('input')
 console.log(inp.getAttribute('type'))




 //---------------------------------


//  setattribute --> setter

anchor.setAttribute('type' , 'http://facebook.com')//1st-> jisko , 2nd -> jiss value se change


 
inp.setAttribute('type' , 'color')
inp.setAttribute('type' , 'date')
inp.setAttribute('type' , 'checkbox')
