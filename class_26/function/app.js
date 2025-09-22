

// function user (){

// }
// let user1 = user();

// console.log(user1)


//----------------------

// function user (){

// }
// let user1 = new user();//new keyword ke wajha se ya user function ek constructor function me convert ho gya  ---> return an onject{}

// console.log(user1)


//--------------------------
//isse ham constructor function khte ha because of these new keyword
//convesstion  -> 1st latter caopital
// function User (){
// this.username = "bhumika"
// this.age = 21;
// this.color = "purple"

// }
// let user1 = new User();

// console.log(user1)

//----------------------------

// function User (naam , umar  , rang){
//     this.username = naam;
//     this.age = umar;
//     this.color = rang;
    
//     }
//     let user1 = new User('shashi'  , 154  , 'black');
//     let user2 = new User('sam'  , 15 , 'blue');

    
//     console.log(user1)
//     console.log(user2)

//----------------------------------

// function User (naam , umar  , rang){
//     this.username = naam;
//     this.age = umar;
//     this.color = rang;

//     this.desc = function(){
//         return `my name is ${this.username}`
//     }
    
//     }
//     let user1 = new User('shashi'  , 154  , 'black');
//     let user2 = new User('sam'  , 15 , 'blue');

    
//     console.log(user1)
//     console.log(user1.desc())

    

function User (naam , umar  , rang){
    this.username = naam;
    this.age = umar;
    this.color = rang;

    // this.desc = function(){
    //     return `my name is ${this.username}`
    // }

    User.prototype.Description = function(){
               return `my name is ${this.username}`

    }
    
    }
    let user1 = new User('shashi'  , 154  , 'black');
    // let user2 = new User('sam'  , 15 , 'blue');

    
    console.log(user1)
    console.log(user1.Description())

    // let user2 = new User('sam'  , 15 , 'blue');
    // console.log(user2)
    // console.log(user2.desc())


    

    

