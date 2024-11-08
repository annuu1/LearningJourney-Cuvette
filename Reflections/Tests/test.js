let promise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        resolve("promice resolved now")
    }
    else{
        reject("The promise broken......")
    }
})

promise.then(result => {
    console.log(result);
    return "first promise resolved"
})
.then(result=>{
    console.log(result);
    
})
.catch(result=>{
    console.log(result);
})