// Factory 
 
function CreateCircle(raduies) 
{
 return {
    raduies,
     draw: function () { 
         console.log('draw function !!');
     }
 }
} 


let circle = CreateCircle(1);
circle.draw();
circle.raduies = 13 ;
console.log(circle.constructor);
