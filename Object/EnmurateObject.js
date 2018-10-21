
function cricle() { 
    this.raduis = 5 ;
    this.xDirection = 9
    this.draw = function ()  { 
        console.log('draw Function');
    }
}

const ce = new cricle();
// loop inside object to get proprties
for(let key in ce) { 
    if(typeof ce[key] !== 'function')
    console.log(key);
} 

const Keys = Object.keys(ce);
console.log(Keys);

if('raduis' in ce)
    console.log('raduis in Circle');

