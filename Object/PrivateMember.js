
function CreateCirccle(raduis) { 
    this.raduis ;
    this.Width = 100;
    //  clojure member 
    // clojure is define which member will be accessable in entire object
    let ComputOptimumLocation = { x:0 , y:0}; // private member

    this.CalculateCircleData = function() { 
        // Scope member 
        // Scoped Member which are defined inside the function
        // with limit of function Brackets  
        let x , y ;
        //access public member
        this.Width;

        // acccess private member
        ComputOptimumLocation();
    }


}