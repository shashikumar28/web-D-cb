





// queryselector

let p = document.querySelector('p');

// innerText-->getter + setter
console.log(p.innerText);  // --> brainful --> this can read css(aware of the styling)

// textContent --> getter + setter
console.log(p.textContent);  // brainless --> cannot read css(unaware of the styling)

//inneerHTML->getter + setter

console.log(p.innerHTML);  // brainful  -> reads css  + shows the tags too


//--------------------------------

// setter
p.innerText = "hello i am bhaukali baba"

p.textContent = "hello i <h1>am bhukali</h1> baba"
