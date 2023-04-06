const promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
        reject('입장');
    }, 3000);
});
promise.then(value=>{
    console.log(value);
})