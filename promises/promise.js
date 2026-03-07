const promiseOne = new Promise((resolve,reject)=>{
         setTimeout(function(){
            console.log("hello promises")
            // resolve is added to katam kro promise ko
            resolve()
         },2000)
})

// now to connect the promise
promiseOne.then(function(){
    console.log("promise is resolved")
})


// for chaining of promises

const promiseTwo = new Promise( (resolve,reject)=>{
     setTimeout(() => {
        let error = false
        if(error){
            console.log("ERROR occured here")
            reject('the reject statment called')
        }
        else{
            console.log("smooth execution");
           resolve('smother execution ...')
        }
     }, 1000);
})

promiseTwo.then((e)=>{
  console.log("promise came inside");
  return e;
}).then((e)=>{
    console.log(e);
}).catch((e)=>{
    console.log(e);
})

// const promiseThree = new Promise( (resolve,reject)=>{
//      setTimeout(() => {
//         let error = false
//         if(error){
//             console.log("ERROR occured here")
//             reject('the reject statment called')
//         }
//         else{
//             console.log("smooth execution");
//            resolve({username : "abhishek" , roll: 123})
//         }
//      }, 1000);
// })

// promiseThree.then((e)=>{
//   console.log("promise came inside");
//   return e;
// }).then((e)=>{
//     console.log(e.roll);
// }).catch((e)=>{
//     console.log(e);
// }).finally(()=> {console.log("finally executed");}
// )



// using try catch and asyn await
// const promiseFour = new Promise( (resolve,reject) =>{
//      setTimeout(() => {
//         let error = false
//         if(error){
//             console.log("ERROR occured here")
//             reject('the reject statment called')
//         }
//         else{
//             console.log("smooth execution2");
//            resolve({username : "abhishek" , roll: 1232})
//         }
//      }, 1000);
// })

 // if only asyn used it will handel the no error types
async function promiseFourconsumed(params) {
    try {
        // await waiting for the promise
        const responce = await promiseFour
        console.log(responce);
        
    } catch (error) {
        console.log(error);
    }
}


//async await fetch

async function fetchfunction() {
    try{
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    // as the response is asynchronus so await must be included
    const data = await responce.json()
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchfunction()


// final

fetch('https://jsonplaceholder.typicode.com/users')
.then((e)=>{
    const response = e
        return response.json();
        })
        .then((e)=>{
            console.log(e);
            })
            .catch((e)=>{
                console.log(`e , ${e}`);
                })