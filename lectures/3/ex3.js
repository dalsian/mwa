const EventEmitter = require('events');

class Clock extends EventEmitter {}

const clock = new Clock();
clock.on('event', ()=> {console.log('woohoo')});

setInterval(()=> {clock.emit('event')}, 1000);

