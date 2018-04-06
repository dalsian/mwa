const EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor(){
        super();
        setInterval(()=> {this.emit('event')}, 1000);
    }
    
}

const clock = new Clock();
clock.on('event', ()=> {console.log('woohoo')});
