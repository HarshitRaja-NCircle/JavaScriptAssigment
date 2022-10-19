function promiseDemo() {
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:4000')
        .then((response) => response.text())
        .then((data) => {
            resolve(data);
        }).catch(err => reject(err));
    });
}

promiseDemo().then((data) => {
    console.log(data);
    localStorage.setItem("data", data);
}).catch(err => {
    console.error(err);
})