
const Circle = { 
    raduis: 1,
    draw: function() {
        console.log('draw');
    }
}
// in javaScript it's easy to create dynamic property
Circle.location = 1;
// Bracket notation
Circle['X Location'] = 10;
// Delete Object Poperty
delete Circle.location;

console.log(Circle);