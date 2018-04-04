//Ex1
Array.prototype.even = function() {
    return this.filter(n=>n%2===0);
};
Array.prototype.odd = function() {
    return this.filter(n=>n%2===1);
};
console.log([1,2,3,4,5,6,7,8,9,0].even());
console.log([1,2,3,4,5,6,7,8,9,0].odd());

//Ex2
/*
1. setTimeout() has extra process to initialize system timer. When we need to timeout
   immediately, it's faster to call setImmediate() instead.
2. processNextTick() will push the process into a prority queue which is not part of event loop. 
    thus executes first timer is initialized.
3. Array, Boolean, Date, Error, EvalError, Function, Infinity, JSON, Math, NaN
*/

//Ex3
function slow(callback) {
    setTimeout(() => {for(let i = 0; i <= 5e8; i++) {} console.log("Loop done.");}, 10);//prevent blocking
    
    if (Math.random() > 0.5) {
        //this will call back asynchronously upon error.
        setImmediate(()=>{return callback("My Error", null);}); 
    }
    setImmediate(()=>{return callback(null, {id:12345});});
}
function exec(fn) {
    let doneCB;
    let failCB;
    let doCallBack = ()=> {
        if (doneCB && failCB) {
            fn((err, obj)=>err?failCB(err):doneCB(obj)); 
        }
    };
    return {
        done : function(cb) {
            doneCB = cb;
            doCallBack();
            return this;
        }, fail: function(cb) {
            failCB = cb;
            doCallBack();
            return this;
        }
    };
}


exec(slow).done(function(data) { console.log(data);})
            .fail(function(err) { console.log("Error: " + err);});
