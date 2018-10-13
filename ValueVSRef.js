
// Value type
let x = 10;
let number = { value: 10 };

// Value Type
function increase(number){
    number++;
}

function increaseObj(number){
    number.value++;
}


increase(x);
increaseObj(number);

console.log(x); // x = 10
console.log(number); // number.value = 10
