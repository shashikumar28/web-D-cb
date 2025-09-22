


// class Person{
//     constructor(naam, umar){
//         this.username = naam
//         this.age = umar;
//     }

//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName (){
//         return (`naam is ${this.username}`)
//     }
// }

// let Person1 = new Person('samarth' , 120);
// console.log(Person1);
// console.log(Person1.printName());
// console.log(Person1.getName());

//-----------------------------
//not one of the good ways (but correct ha)

// class Person{
//     constructor(naam, umar){
//         this.username = naam
//         this.age = umar;
//     }

//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName (){
//         return (`naam is ${this.username}`)
//     }

// }
// class Student{
//     constructor(naam, umar){
//         this.username = naam
//         this.age = umar;
//     }

//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName (){
//         return (`naam is ${this.username}`)
//     }
// }

// let Person2 = new Student('anand' , 23)
// console.log(Person2)


class Person{
    constructor(naam, umar){
        this.username = naam
        this.age = umar;
    }

    printName(){
        console.log(`my name is ${this.username}`)
    }
    getName (){
        return (`naam is ${this.username}`)
    }

}
class Student extends Person{
   constructor(naam, umar, rollno){
    super(naam, umar)///upar se parent class se access kar lega
    this.rollnumer = rollno;
   } 
   printName(){
    console.log(`kaa hua ${this.username}`)
}
alag(){
    console.log('mai hu alag')
}
}

let Person3 = new Student('anshika' , 13 , 1)
 console.log(Person3)
 console.log(Person3.printName)