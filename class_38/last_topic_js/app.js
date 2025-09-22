// const person = {
//     first:"smaarth",
//     favColor:"blue",
//     last:"vohra"
// }

// console.log(person)

// //can i add property?  -> YESSS

// person.age = 39;
// console.log(person)


// //can i change the existing value  ? -> yess

// person.first = "shashi"
// console.log(person)



// //can i delete a property  ? -> YESS
// // delete  person.age;
// // delete person.last
// delete person.favColor;
// console.log(person)

// //-----------------------------------


// // spread operator

// //array par spread
// let arr = [10,20,30,40,50];
// let arr2 = [80,90,100];


// // concationation(merg karna dono arr ko )
// let ans = arr.concat(arr2);
// console.log(ans)


// //modern  -> most widely used

// //arr2 = [ ...arr, 80,90,100]

//  let anss  = [ ...arr, ...arr2]
//  console.log(anss)


// // console.log(arr2)

// //---------------
// // object par spread

// let obj = {
//     l :"sam",
//     m: "vohra",
//     n : 10
// }

// let obj1 = {
//     ...obj ,
//     age: 25
// }

// console.log(obj)
// console.log(obj1)

// obj1.l = 200;

// console.log(obj)
// console.log(obj1)

// //------------------------------



// destructuring in array

// let fruits = ['apple' , 'mango' , 'pineapple' , 'orange'];
// let fruits = ['apple' , 'mango' , 'pineapple' , 'orange' , 'lichi'];

// // bekaar
// console.log(fruits[2]);
// console.log(fruits[0]);

// ///modern way
// // let [a,b,,d] = fruits;//pass the any variable in arr
// let [a,b,c,d,e="banana"] = fruits;//default value se kam chala lega
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)



//destructuring in Object



const  car =  {
    name: 'bm-babloo',
    price: 150
}

// normal way
console.log(car.name)
console.log(car.price)

//modern way 

let {n , p} = car//wrong   ////array is a order data structure but object is not a order data isliye object ko obj ke naam se call karna padta ha
//let {name , price} = car//RIGHT WAY
let {name:badalahuanaam, price} = car;//default


console.log(name)//no
console.log(badalahuanaam)//yes
console.log(price)




