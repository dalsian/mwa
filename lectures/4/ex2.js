const os = require('os');

const checkMem = (callback) => {
    let result = null;
    if (os.totalmem() < 2048000000) {
        result = "This app needs at least 2GB of RAM.";
    }
    callback(result);
}

const checkCPUs = (callback) => {
    let result = null;
    if (os.cpus().length <= 2) {
        result = "Processor is not supported";
    }
    callback(result);
}

const checkSystem = () => {
    console.log("Checking your system...");
    let pass = true;
    checkMem(err => pass &= (err===null));
    checkCPUs(err => pass &= (err===null));
    if(pass) {
        console.log("System is checked successfully.");
    }
};

checkSystem();