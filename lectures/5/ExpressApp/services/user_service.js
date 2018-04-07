const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

const url_user = 'https://jsonplaceholder.typicode.com/users';

const getUsersPromise = (callback)=>{
    fetch(url_user)
    .then(res=>res.json())
    .then(data=>{callback(null,data);})
    .catch(err=>{callback(err,null)});
};

const getUserObservable = (callback)=>{
    Rx.Observable.from(fetch(url_user).then(res=>res.json()))
        .subscribe(data=>{console.log(data); callback(null,data);},
                    err=>{console.log(err); callback(err,null);});
};

async function getUserAsync(callback) {
    try {
        let data = await fetch(url_user).then(res=>res.json());
        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {getUsersPromise : getUsersPromise,
                    getUserObservable : getUserObservable,
                    getUserAsync : getUserAsync};