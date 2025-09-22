


// constructor function


// function person(naam , umar){
//     this.username = naam;
//     this.age = umar;

// }

// person.prototype.getFullName = function(){
//     return (`Naam is ${this.username}`)
// }

// person.prototype.printName = function(){
//     console.log(`Name is ${this.username}`)
// }


// let person1 = new person("sam" , 1234)
// console.log(person1)


//--------------------------------------

//class syntex

class Person{
    constructor(naam , umar){
        this.username = naam;
        this.age = umar;
    
    }
    Printname(){
        console.log(`my name is ${this.username}`)
    }
    getFullname(){
        return (`naam is${this.username}`)
    } 

}

let Person2 = new Person("sam" , 1234)
console.log(Person2)
