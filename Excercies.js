
let output = '';
let minutString='00';
const seconds = 60;
const minutes = 60;

for(let minute = 0 ; minute < 60 ; minute++) { 
    for(let second = 1 ; second < seconds ; second++ ) {
        let sec = second.toString().length > 1 ?  second.toString() : '0' + second.toString();
        output += `${minutString}:${sec} , `
    }
    minutString = minute.toString().length > 1 ?  minute.toString() : ('0' + minute.toString());  
}
console.log(output);