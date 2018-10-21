
// functions are objects with property 
// here is what happen when you create object using constructors
// this example show you what happen under the hood

/* 
CreateCircle = function (raduis) {
    this.raduis = 1 ;
    this.draw = function () {
        console.log('draw');
 }
}
*/

CreateCircle1 = new Function('raduis',`
    this.raduis = 1 ;
    this.draw = function () {
        console.log('draw');
    }
`);

const cr1 = new CreateCircle1(1);

// CreateCircle.call({},1); = const cr1 = new CreateCircle1(1);
// new mean that refer to golbal object windows to {} when you use this.
// removing new mean this CreateCircle.call(windows,1);

console.log(cr1);

