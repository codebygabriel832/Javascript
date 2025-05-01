//Objects and Primitive 

// let data = 40

// let myObj = {
//     age: 23,

// }

// let dataCopy = data 

// dataCopy = 43

// console.log(data)


// objCopy = myObj

// objCopy.age = 27

// console.log(myObj.age)



// const playerOne = {

//     name:"Gabriel",
//     marker: "X"
// }

// const playerTwo = {
//     name:"Queen",
//     marker: "O"
// }

// function playerName(player) {
//     console.log(player.name)
// }

// let results = playerName(playerOne)



//Object Constructors 

// function Player(name, marker) {

//     if(!new.target) {
//         throw Error("You need to include 'new' operator to call the constructor ")
//     }

//     this.name = name
//     this.marker = marker
//     this.welcomeMessage = function () {
//         console.log(`Welcome ${this.name}`)
//     }

// }

// const playerOne = Player("Gabriel", "X")
// const playerTwo = new Player ("Queen", "O")

// playerOne.welcomeMessage()
// console.log(playerTwo.marker)



//'Book' conatructor

// function Book(tittle, author, pages, read) {

//     if(!new.target) {
//         throw Error("You need to include 'new' operator to call the constructor ")
//     }

//     this.tittle = tittle
//     this.author = author
//     this.pages = pages
//     this.read = read
    
//     this.info = function () {

//         return (`${this.tittle} by ${this.author},${this.pages} pages, ${this.read}`)
//     }
    
// }

// const thePearl = new Book("The Pearl", "J.Steinbeck", 96, "read")
// const whaleRider = new Book("Whale Rider", "Witi Ihimaera", 144, "not yet read")

// console.log(thePearl.info())
// console.log(whaleRider.info())

// //Creating a prototype 


// Book.prototype.isSetBook = function () {
//     return ("This is a set-book")
// }

// let theInheritance = {};

// console.log(thePearl.isSetBook())

// Protype inheritance syntax

// function Animal (name, habitat) {

//     if(!new.target) {
//         throw Error("You need to include 'new' operator to call the constructor ")
//     }


//     this.name = name
//     this.habitat = habitat
// }

// Animal.prototype.checkType = function () {

//     if(this.habitat == "Home") {

//         return(`I'm ${this.name} and I am  a domestic animal`)

//     } else if (this.habitat == "Wild") {

//         return(`I'm ${this.name} and I am  a wild animal`)
//     }
// }


// function domestic(name, habitat) {

//     if(!new.target) {
//         throw Error("You need to include 'new' operator to call the constructor ")
//     }


//     this.name = name
//     this.habitat = habitat
// }

// function wild(name , habitat) {

//     if(!new.target) {
//         throw Error("You need to include 'new' operator to call the constructor ")
//     }


//     this.name = name
//     this.habitat = habitat
// }

// //Inhertance


// // Method 1

// // domestic.prototype = Object.create(Animal.prototype)
// // wild.prototype = Object.create(Animal.prototype)

// //Method 2
//  let habivore = []

// //Object.setPrototypeOf(habivore.prototype, Animal.prototype)
// Object.setPrototypeOf(domestic.prototype, Animal.prototype)
// Object.setPrototypeOf(wild.prototype, Animal.prototype)

// let cow = new domestic("cow", "Home")

// let hyena = new wild("hyena", "Wild")

// console.log(cow.checkType())
// console.log(hyena.checkType())

// //Checking for prototypes

// Object.getPrototypeOf(Animal)

// //checking for prototype inheritance

// console.log(cow instanceof Animal )//true

// console.log(habivore instanceof Object) // true since arrays are types of Objects




//using call() to copy properties from one constructor to another

// function Vehicles(name, year, company, fuelConsumption) {
    
//     this.name = name 
//     this.year = year
//     this.company = company
//     this.fuelConsumption = fuelConsumption

// }

// function Trucks(name, year, company, fuelConsumption, loadWeight) {

//     if(!new.target) throw Error("The 'new' operator must be included when creating a new object using Trucks constructor")

//     Vehicles.call(this, name, year, company, fuelConsumption)
//     this.loadWeight = loadWeight

//     this.info = function () {

//         return (`name: ${this.name} \nYear: ${this.year} \ncompany: ${this.company} \nfuelConsumption: ${this.fuelConsumption} \nlaodWeight: ${this.loadWeight}`)

//     }
// }

// function SmallCars (name, year, company, fuelConsumption, passagerCapacity) {
    
//     if(!new.target) throw Error ("The 'new' operator must be included when creating a new object using smallCars constructor")
    
//     Vehicles.call(this,name, year, company, fuelConsumption)
//     this.passagerCapacity = passagerCapacity

//     this.info = function () {

//         return (`name: ${this.name} \nYear: ${this.year} \ncompany: ${this.company} \nfuelConsumption: ${this.fuelConsumption} \npassengerCapacity: ${this.passagerCapacity}`)

//     }
// }


// let boxTruck = new Trucks("Box Truck", 2010, "Isuzu", "10Km/l", "2 Tonnes" )
// let porscheCayenne = new SmallCars("Porsche Cayenne", 2010, "Porsche AG", "5Km/l", 4 )

// console.log(boxTruck.info())
// console.table(porscheCayenne.info())



//Object.create() ro extend the properties of one constructor to another

/*function Vehicles(name, year, company, fuelConsumption) {
    
    this.name = name 
    this.year = year
    this.company = company
    this.fuelConsumption = fuelConsumption

}

Vehicles.prototype = {

    getName() {
        return this.name
    }
}


function SmallCars (name,year, company,fuelConsumption, passagerCapacity) {

    Vehicles.call(this,name, year, company, fuelConsumption)
    this.passagerCapacity = passagerCapacity

    this.info = function () {

            return (`name: ${this.name} \nYear: ${this.year} \ncompany: ${this.company} \nfuelConsumption: ${this.fuelConsumption} \npassengerCapacity: ${this.passagerCapacity}`)
        
         }

}

SmallCars.prototype = Object.create(Vehicles.prototype)

let porscheCayenne = new SmallCars("Porsche Cayenne", 2010, "Porsche AG", "5Km/l", 4 )

console.table(porscheCayenne.info())
console.dir(SmallCars)
console.log(porscheCayenne.getName())
*/

//this keyword


/* When using it in an object it refers to the object in the scope

function Car (name. color, model) {
     
    this.name = name;
    this.color = color
    this.model = model
} */

//when using it arrow function it refers to the regular function adjacent to the arrow function


// const Car = {

//     name:"Porsche Cayenne",
//     company:"Porsche AG",
//     color: "black",
//     info: () => {

//         return (`${this.name}\n${this.color}\n${this.company}`)

//     }
// }

// console.log(Car.info()) //prints undefine


// let availableStock = 10

// function checkStock(stock) {

//     let averageStock = 50

//     if(stock < averageStock) {

//         let newItems = averageStock - stock
//         console.log(`${newItems} items should be added to the stock to make it meet the threshold`)

//     } else {
//         console.log("The stock is good")
//     }
// }
// checkStock(availableStock)


/*
//Closures 


function checkStock(stock) {
    
    let availableStock = stock

    return function restocking() {

        let averageStock = 50

        if(availableStock < averageStock) {

            let newItems = averageStock - availableStock
            return (`${newItems} items should be added to the stock to make it meet the threshold`)
    
        } else {
            return ("The stock is good")
        }
    }

   
}
let stockStatus = checkStock(70)
console.log(stockStatus())

*/

/*

//Factory Function 

function createStudent(name, age, gpa, year, school) {

    return {
        info: function() {
            return (`${name} ${age} ${gpa} ${year} ${school}`)
        }
    }
}

const student1 = createStudent("James", 22, 3.5, 2025, "Law")
const student2 = createStudent("Marion", 23, 3.6, 2025, "Business")

console.log(student1.info())
console.log(student2.info())

console.log(typeof(createStudent))

*/



//Destructuring

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d },
// } = obj; // d is re-assignable
// console.log(obj.b.c)


// const numbers = [];
// const obj = { a: 5, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// console.log(numbers[0])

/*
function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }

function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
  }


 const player1 = createPlayer("Mike", 1) 

 player1.giveReputation()
 player1.giveReputation()
 player1.giveReputation()
 player1.increaseLevel()
 player1.increaseLevel()

console.log(player1)

 */

 //console.log(player1.getReputation())


//iife(immediately invoked function expression)

/*
//syntax

(()=>{
    //do stuffs
})()

//or

(function(){
    //do stuffs
})()
*/


//Application 
//Data Privacy

// (function() {
//     let counter = 0;

//     increamentCounter = function () {
//         counter ++
//         console.log(counter)
//     }

// })()
// increamentCounter()
// increamentCounter()

//document.writeln("Hey")


//module Pattern

// const Formatter = (function (doc) {
    
//     const log = (message) => {
//         console.log(`[${Date.now()}] Logger:${message}`)
//     }
//     const makeUpperCase = (text) => {

//         log("Make uppercase")
//         return text.toUpperCase()
//     }

//     const writeToDOM = (selector, message) => {

//         doc.querySelector(selector).innerHTML = message;
          
//     }

//     return {
//         makeUpperCase,
//         writeToDOM
//     }
// })(document ||documentMock)

// console.log(Formatter.makeUpperCase("hey you"))
// Formatter.writeToDOM("#target", "Hi there");




//Using getters and setters

/*

const user = {
    fName:"Agnes",
    sName:"Charlotte",

    get fullName() {

        return (`${this.fName} ${this.sName}`)
    },
    
    set fullName(value) {

        [this.fName, this.sName] = value.split(" ")

    }

}

user.fullName = "Gabriel Wine"

console.log(user.fullName)


//using definePropertity method

Object.defineProperties(user, 'fullName', {

    get() {
        return (`${this.fName} ${this.sName}`)
    },

    set() {
        [this.fName, this.sName] = value.split(" ")
    }
})
*/

// const user = {

//     get name() {

//         return this._name
//     },

//     set name(value) {

//         if(value.length < 4) {

//             alert("The name is too short")
//             return 
//         }
        
//         this._name = value

//     }
// }

// user.name = "Fel"

// alert(user.name)

/*
function User(name, birthday) {

    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
          let todayYear = new Date().getFullYear();
          return todayYear - this.birthday.getFullYear();
        },
        set(value) {
            let now = new Date();
            let yearOfBirth = now.getFullYear() - value;
            this.birthday = new Date(yearOfBirth, now.getMonth(), now.getDate())
        }
      });

}




let user = new User("Gabriel", new Date(2001, 10, 3))

user.age = 27

console.log(user.birthday)
*/


//classes when using get and set we do not use the constructor
/*
class User {

    // constructor() {
    //     this.name = name,
    //     this.age = age
    // }
    get details() {

        return(`${this.name} ${this.age}`)

    }
    set details(value) {

        [this.name, this.age] = value.split(",")

    }

}

const user = new User()

user.details = "Gabriel, 23"
console.log(user.details)
*/
//syntax

/*
class MyClass {
    prop = value; // property
  
    constructor(...) { // constructor
      // ...
    }
  
    method(...) {} // method
  
    get something(...) {} // getter method
    set something(...) {} // setter method
  
    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
  } 
*/
/*
class Clock {

    timer;

    constructor({template}) {

        this.template = template
        this.timer = 0
    }

    render(){

      let date = new Date()
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output)
    }
    start (){
      this.render()
      this.timer = setInterval(this.render(), 10000)
    }
    stop(){
      clearInterval(this.timer)
    }
  }
  let clock = new Clock({template: 'h:m:s'})
  clock.start()

*/

/*
//static methods and static fields 


class Point {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }

    static displayName = "point"

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
    
        return Math.hypot(dx, dy);
      }
}

const p1 = new Point(10, 20)
const p2 = new Point (30, 40)

console.log(Point.displayName)
console.log(Point.distance(p1, p2))

*/

//Private field are declared by #prefix

class Product {

    #name
    #price 
    
    constructor(name, price) {
        this.#name = name 
        this.#price = price
    }
}