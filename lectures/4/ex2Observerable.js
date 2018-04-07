
const os = require('os');
const Rx = require('@reactivex/rxjs');

const checkSystem = () => {
    return new Promise((resolve, reject)=>{
        let err = "";
        if (os.totalmem() < 2000000000) {
            err += "This app needs at least 2GB of RAM.\n";
        } 
        if (os.cpus().length <= 2) {
            err += "Processor is not supported\n";
        }
        if(err === "") {
            resolve("System is checked successfully.");
        } else {
            reject(err);
        }
    });
};

console.log("Checking your system...");
Rx.Observable.fromPromise(checkSystem())
            .subscribe(result=>console.log(result),
                        err=>console.log(err));