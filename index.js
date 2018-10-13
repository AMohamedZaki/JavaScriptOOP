
// object literal 
// create other instance will case copy 
const Circle = {
    radiues: 1 ,
    location : {
        x: 1 ,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
}

// Factory 
 
function CreateCircle(raduies) 
{
 return {
     radiues ,
     draw: function () { 
         console.log('draw function !!');
     }
 }
} 


let circle = CreateCircle(1)