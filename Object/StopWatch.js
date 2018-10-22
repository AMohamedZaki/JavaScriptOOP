
function StopWatch() { 

    let start , end , running , duration = 0;

    this.start = function() {
        if(running)
        throw Error(`Can't Start Method Start() Twice` );

        running = true ;
        start = new Date();
    }


    this.stop = function () {
        end = new Date();
        
        if(!running)
        throw Error('Start Method Should be Fired');

        running = false;
        duration = (start - end) / 1000 ;
    }


    this.reset = function() { 
        duration = 0;
        start = null;
        end = null;
        running = false
    }

    Object.defineProperty(this , 'duration', {
        get: function (){ return duration; }
    })

}


const sw = new StopWatch();