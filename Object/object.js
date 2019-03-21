// object literal
// create other instance will case copy
const Circle = {
  radiues: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log(this);
  }
};

const draw = Circle.draw;
draw();
console.log(draw);
