const fs = require('fs');
// const download = ()=>{fs.createReadStream('/epicinstaller.msi').pipe(res);}
process.on('message', (msg) => {
    // console.log(msg);
    let data = fs.readFileSync(msg);
    // fs.readFile(msg,(data)=>process.send(data));
    process.send(data);
});