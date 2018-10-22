
function Circle(raduis) {
    this.raduis;
    let OptimumLocation = { x: 0, y: 0 };

    Object.defineProperty(this , 'OptimumLocation', {
        get: function () { 
            return OptimumLocation;
        },
        set: function (value) { 
              
            if(!value.x || !value.y)
              throw Error('Invalid Input');
              OptimumLocation = value; 
        }    
    }
    );
}



// Create instance From Circle

let circle = new Circle(1);
circle['OptimumLocation'] = { x:1 , y: 2}; 
console.log(circle['OptimumLocation']);