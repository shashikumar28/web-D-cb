

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');



btn.addEventListener('click' , function(){
    let searchtext = input.value;
    let data  = fetchData(searchtext);
    input.value = "";

})

function fetchData(searchtext){

    //fetch

    fetch(`https://api.tvmaze.com/search/shows?q=${searchtext}`)
    .then(function(res){
        return res.json();

    })
    .then(function(data){
// console.log(data)
  manipulateDom(data);
    })
    //axois
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchtext}`)
    // .then(function(respones){
    //     console.log(respones.data)
    //     maipulateDom(respones.data)
          
    // }) 
}

function manipulateDom(allthedata){
    //to remove the already present movie
while(list.firstChild){
    list.firstChild.remove();
}



    for(let data of allthedata){
        let figure = document.createElement('figure');
        figure.innerHTML = `
        <img src=${data.show.image.medium} />
        <h2> Name: ${data.show.name} </h2>
         <h5> Language: ${data.show.language}</h5>
         `

         list.appendChild(figure);

    }
}