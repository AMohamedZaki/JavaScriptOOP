
// function Circle() {
//     // private members
//     let x = 0 , y = 0;
//     // public member
//     this.raduis,
//     this.CalculateOptimumLocation = function() { 
//         return x + y ;
//     }    

//     // member with getter and setter 
//     Object.defineProperty(this, "CalculateArea",{
//         get: function () { 
//             x +=5;
//             y +=5
//             return x + y; 
//         },
//         set: function(value) {
//             value = 9 ;
//         }
//     });
// }


let person = { name: 'Mn3m'} ;

Object.defineProperty(person, 'name' , {

// to make the property is read only     
writable: false,

// to provide that object can itrate in insiaide has keys or not
enumerable : true,

// to prevent to delete the property from object 
configurable: false

})

person.name = 'asdasd';

delete person.name;

console.log(person.name);

let objectBase = Object.getPrototypeOf(person);
console.log('objectBase', objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('descriptor', descriptor);


// console.log(person);

