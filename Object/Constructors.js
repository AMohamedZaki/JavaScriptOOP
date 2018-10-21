
// Constructors

function Circle (raduis) {
    console.log(this);
    this.raduis = 1 ;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);

console.log(circle)