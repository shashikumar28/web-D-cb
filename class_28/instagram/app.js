


//WRONG OR RIGHT (YOU DECIDE)

// function step1(){
//     console.log('selecting the image from gallery');
//     setTimeout(function(){
//         return 'selected image'
//     } , 4000)//1second  => 1000 milli second
// }

// function step2(image){
//     console.log(`applying filter to the ${image} plz wait`)
//     setTimeout(function(){
//         return 'filter applied'
//     } , 2000)
// }

// let image = step1();
// console.log(image);
// let filteredImage = step2(image);
// console.log(filteredImage);

//that is wrong way

//---------------------------------

//right way


function step1(fn){
    console.log(' image is being selected from the gallery');
    setTimeout(function(){
        console.log('image is selected now');
        fn('photo.jpg')//step 2 ka function
    } , 4000)
}

function step2(image , fn){
    console.log(`applying filter to the ${image}`);
    setTimeout(function(){
        console.log(`filter applied to the ${image}`);
        fn('filtered image')// step 3 ka function
    } , 2000)
}

function step3(filter ,fn){
    console.log(`adding caption to the ${filter}`);
    setTimeout(function(){
        console.log('caption done');
        fn('image with caption')
    } , 3000)
}

function step4(caption){
    console.log(`uploading your final ${caption}`);
    setTimeout(function(){
      console.log('image uploading successfully')
    } , 5000)
}
//isse pyramid of doom ya fir horizontally grow khte ha 
// horizontally grow -> pyramid of DOOM
step1(function(image){
    step2(image , function(filter){
        step3(filter , function(caption){
             step4(caption)
        });
    });
});


