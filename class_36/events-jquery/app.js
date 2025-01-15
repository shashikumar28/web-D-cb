

// $('button').click(function(){
//     console.log("hello")
// })

// queryselectorall
$('ul li').click(function(e){
// console.log(e)
// console.log(e.target)
//e.target.classList('color' , 'red')//wrong


// jquery wala this -> target bass
$(this).css('color' , 'red')
})


// keyup  , keydown
// $('input').keydown(function(){
//     console.log("hello")
// })

// $('button').on( 'click' ,function(){
//     console.log("hello")
//     let ans = $('input').val()
//     console.log(ans)
// })


//----------------------------------------
// effects

$('#fadeIn').on('click'  , function(){
    $('#container').fadeIn()
})
$('#fadeOut').on('click' , function(){
    $('#container').fadeOut()

})
$('#fadeToggle').on('click' , function(){
    $('#container').fadeToggle()

})//slideIn  , slideOut  -> docs refer

