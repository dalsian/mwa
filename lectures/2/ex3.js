//Ex3
function slow(callback) {
    setTimeout(() => {for(let i = 0; i <= 5e8; i++) {} console.log("Loop done.");}, 10);//prevent blocking
    
    if (Math.random() > 0.5) {
        //this will call back asynchronously upon error.
        // setImmediate(()=>{return 
            return callback("My Error", null);
        // }); 
    }
    // setImmediate(()=>{
        return callback(null, {id:12345});
    // });
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
