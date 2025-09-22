


// appendChild()
let section = document.querySelector('section')



 let h2 = document.createElement('h2')
 let p = document.createElement('p')



 h2.innerText = "smsarth"
 p.innerText =  'galori bina chutney kaise bani '

// section.appendChild(h2) // right
// section.appendChild("hi") // wrong --> string

//----------------------

//apend() --> multiple and string also accepted

//section.append(h2)
//section.append(h2 , p)
// section.append("hello from multimillioner")//right


//section.append(`<h1>hello from multimillioner</h1>`)//right

//----------------------------

// starting mei add

// prepend


section.prepend(`<h1>hello from multimillioner</h1>`)//right

section.prepend(p , h2)

//-------------------------------------------
section.before(h2)
section.after(h2)





//PTR -> 1 ELEMENT ya to append hoga ya fir prepend dono ek saath nhi ho sakta