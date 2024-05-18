
// /
// promise :

// /**
//  * number1 : pending : promise nile 
//  * number2 : fullfill : jodi fullfill hoi taile onno kaj korte parbe na hole 
//  * number1 : rejected : promise fullfill na hole rejected
//  */

// ! promise chaining 1.1


const promise1 = new Promise((resolve1, reject)=>{
    setTimeout(() => {
        resolve1("task1 done")
    },1000);
})
const promise2 = new Promise((resolve2, reject)=>{
    setTimeout(() => {
        resolve2("task2 done")
    },1000);
})

promise1.then((result1)=>{
console.log(result1);
promise2.then((result2)=>{
    console.log(result2);
})
})
// output: 
// task1 done
// task2 done

// ===============================================
// ! promise chaining 1.2 Alternative // important //
const promise1 = new Promise((resolve1, reject)=>{
    setTimeout(() => {
        resolve1("task1 done")
    },1000);
})
const promise2 = new Promise((resolve2, reject)=>{
    setTimeout(() => {
        resolve2("task2 done successfully")
    },1000);
})

promise1.then((result1)=>{ // result1 = resolve1
console.log(result1);
return promise2
}).then((result2)=>{ // result2 = resolve2
    console.log(result2);
})
// output: 
// task1 done
// task2 done successfully
// ===============================================

// ! data fetch using promise 

// todo : 1 . getdata()
// todo : 2 . display()

// ? getdata 
// fake data : https://jsonplaceholder.typicode.com/users


function getdata(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
               return response.json()
            // console.log(response);
        }).then((data)=>{
            resolve(data) //datafetch = data
            //console.log(data); // object array data 
        }).catch((err)=>{
            reject(err)
        })
    })
}
function displaydata(dataDisplay){
    console.log(dataDisplay);  // datafetch = datadisplay
}
// console.log(getdata()) // Promise { <pending> }

// call function 

getdata().then((dataFetch)=>{

    displaydata(dataFetch) // datafetch = datadisplay
})




// output 
// {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: { lat: '-43.9509', lng: '-34.4618' }
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   }
//   =========================================================================
//  2.0 
// function get data 
// ptag catch koren 
const ptag = document.querySelector(".ptag")

 function getdata(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json()
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
 }
 // function display data 
 //browser e console koren
 function displaydata(data1) { // data1 = datafetch
       // console.log(data1); // 10ta user info asve . sob object gula array maje ase  
        let allName = ""
        data1.map((item)=>{
            //console.log(item); // indiviudl object , tar mane easily access kora jabe porti ta item
            //console.log(item.email) // 10ta email address chole asce 
            allName+=item.name;
           // console.log(allName);
            ptag.innerText = allName;


        })
 }

 // call data==========
 getdata().then((dataFetch)=>{
    // console.log(dataFetch[3]);
    displaydata(dataFetch)
 })


//  ===================================================================
//   3.0 
// getdata ()
// display data()

// function getdata()
// catch p tag 


const ptag = document.querySelector(".ptag")

function getdata() {
       return new Promise((resolve , reject)=>{
            fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
                return response.json()
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })  
        })
}
// display function 
function displaydata(datasave) {
        //console.log(datasave[5]);
        let allStreeAddress =""
        datasave.map((item)=>{
            // console.log(item.address.street);
            allStreeAddress +=item.address.street + "<br/>";
            // console.log(allStreeAddress);
            ptag.innerHTML =allStreeAddress
           
        })
}
//console.log(getdata()); //undefined cause return kori nai
// console.log(getdata()); Promise { <pending> } cause return disi 
getdata().then((datafetch)=>{
    displaydata(datafetch)
})
//  ===================================================================

// /!  promise chainig  !! baja baja !!

// function getdata()
// catch p tag 
// const ptag = document.querySelector(".ptag")



function getdata() {
       return new Promise((resolve , reject)=>{
            fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
                return response.json()
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })  
        })
}

// display function 
function displaydata(datasave) { //datafetch = datasave 
  // suppose aekane aarekta promise create korlam
  return new Promise((resolve1,reject1)=>{  //datafetch = resolve1
    resolve1(datasave[7]) //data1 = data2
  })
}



// console.log(getdata()); //undefined cause return kori nai
// console.log(getdata()); Promise { <pending> } cause return disi 

getdata().then((datafetch)=>{ // datafetch = resolve 
    return displaydata(datafetch)
}).then((data2)=>{
    console.log(data2 ); //data1 = data2
})

// ! ========================  (promise) Perfect  chaining baja baja  ==========================================
// /

// function getdata 
// function ui data 
// funtion displaydata

function getData() {
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
           return response.json()
        }).then((data1)=>{
            resolve(data1) // data1 ==> data2 
        }).catch((err)=>{
            reject(err)
        })
    })
}

function displaydata(data3) { // data2 ==> data3
    return new Promise((resolve1, reject1)=>{
        resolve1(data3) // data3 ==> resolved1 e 
    })
}

// ui data

function uidata(data5) { // data4 ==> data5
    return new Promise((resolve2, reject2)=>{ // data5 => resolve2
        resolve2(data5)
    })
}

getData().then((data2)=>{ // resolve(data1) ===> data2
    return displaydata(data2)
    // console.log(data2);
}).then((data4)=>{ // resolved1 ==> data4
    //console.log(data4); 
    return uidata(data4)   
}).then((data6)=>{ // resolve2 ==>data6
    console.log(data6[0].name); // Leanne Graham
})


// ! ========================  perfect promise chainin baja baja  ==========================================

// ? ========================  perfect promise chainin easier syntax  ==========================================

    function fun1() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("hello fun1")
            },1000)
        })
    }
    function fun2() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("hello fun2")
            },1000)
        })
    }
    function fun3() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("hello fun3")
            },1000)
        })
    }
    fun1().then(fun2()).then(fun3()) // hello fun1 , hello fun2,  hello fun3

    // ? ========================  How to pass data using promise chain  ==========================================
    
    function fun1() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("func1 is here")
            },1000)
        })
    }
    function fun2(item) { // item = firstFunct2nd
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(item+"func2 is here") // item = firstFunct2nd = func1 is here
            },1000)
        })
    }
    function fun3(item1) { // result = item1 = func1 is herefunc2 is here
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(item1+"func3 is here") // item1 ==> resolve
            },1000)
        })
    }
        //function calling // func1 er value ==> fun2 + fun1 value ==> fun3 value+ func2value + func1value
        fun1().then((firstFunct1st)=>{
            return firstFunct1st
        }).then((firstFunct2nd)=>{ // fun1 is here
            return fun2(firstFunct2nd)
        }).then((result)=>{
            return fun3(result) // mane ae value o amr lagbe tai aeta return kora hoice
        }).then((resultfinal)=>{ // item1 ==> resolve =>>resultfinal
            console.log(resultfinal); //func1 is herefunc2 is herefunc3 is here
        })
//      ============================================================
//     revise 2.0 
//  ============================================================
    function func1() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve("hello func1")  
            }, 1000);
        })
    }
    function func2(item) { // function1st => item  = hello func1
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item+ "hello func2")  // item(hello func1) => resolve 
            }, 1000);
        })
    }
    function func3(item2) { // secondFunction
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item2+"hello func3")  //item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve
            }, 1000);
        })
    }
    function func4(item3) { // item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item3+"hello func4")// item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3 ==> resolve  
            }, 1000);
        })
    }

    //call all function : 1ta 1ta kore 1
    // ------------------------------------------------------- 1/2 jekono ekta chalan
    func1().then((firstFunct1st)=>{
        return func2(firstFunct1st) //hello func2
    }).then((secondFunction)=>{
        return func3(secondFunction) //hello func2
    }).then((thirdFunction)=>{
        return func4(thirdFunction); // hello func3
    }).then((fourthFunction)=>{
        console.log(fourthFunction); // hello func4
    })
    // ------------------------------------------------------- 
    // //!  kintu ami cie sob function er eksate dekte, 1ta function resolve onno funce  2

    func1().then((firstFunct1st)=>{
        return firstFunct1st
    }).then((firstFunct2nd)=>{
        return func2(firstFunct2nd)
    }).then((secondFunction)=>{  // item(hello func1) => resolve ==>secondfunction
       return func3(secondFunction) // console.log(secondFunction);// hello func1hello func2
    }).then((thirdFunction)=>{
        return func4(thirdFunction)
        //console.log(thirdFunction); //item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc
    }).then((fourthFunction)=>{
        console.log(fourthFunction); // hello func1hello func2hello func3hello func4

        // item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3 ==> resolve => fourthfunction 
    })

//      ============================================================


     
//     !  ekon doren amr function er promise brake hoise mane reject hoise taile ?? error ta dekbo kemne
//     ============================================================
    function func1() {
        return new Promise((resolve,reject)=>{
            let status = false; // jodi status true hoi taile kono error dibe na 
            setTimeout(() => {
                if(status){
                    resolve("hello func1")  
                }else{
                    reject("our function is facing error")
                }
                  
            }, 1000);
        })
    }
    function func2(item) { // function1st => item  = hello func1
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item+ "hello func2")  // item(hello func1) => resolve 
            }, 1000);
        })
    }
    function func3(item2) { // secondFunction
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item2+"hello func3")  //item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve
            }, 1000);
        })
    }
    function func4(item3) { // item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                  resolve(item3+"hello func4")// item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3 ==> resolve  
            }, 1000);
        })
    }
    func1().then((firstFunct1st)=>{
        return firstFunct1st
    }).then((firstFunct2nd)=>{
        return func2(firstFunct2nd)
    }).then((secondFunction)=>{  // item(hello func1) => resolve ==>secondfunction
       return func3(secondFunction) // console.log(secondFunction);// hello func1hello func2
    }).then((thirdFunction)=>{
        return func4(thirdFunction)
        //console.log(thirdFunction); //item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc
    }).then((fourthFunction)=>{
        console.log(fourthFunction); // hello func1hello func2hello func3hello func4

        // item(hello func1) => resolve ==>secondfunction=> item2 ==>resolve ==>thirdfunc==> item3 ==> resolve => fourthfunction 
    }).catch((err)=>{
        console.log("our err :",err); // our err : our function is facing error
    }).finally(()=>{
        console.log("all our done"); // last then e caile aeta amra dite pari  
    })
//      ============================================================

//     ? ========================  How to pass data using promise chain  ==========================================

// ? ========================  perfect promise chainin easier syntax  ==========================================

// ! ========================  Aysnc/Await == if u dont want long chain  ==========================================
// ? Async/Await holo promise ke call korar Advance version 

// function getdata 
// function ui data 
// funtion displaydata
// =============================================================================================
function getData() {
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
           return response.json()
        }).then((data1)=>{
            resolve(data1) // data1 ==> data2 
        }).catch((err)=>{
            reject(err)
        })
    })
}

function displaydata(data3) { // data2 ==> data3 
    return new Promise((resolve1, reject1)=>{
        resolve1(data3) // data3 ==> resolved1 e 
    })
}

// ui data

function uidata(data5) { // data4 ==> data5
    return new Promise((resolve2, reject2)=>{ // data5 => resolve2
        resolve2(data5[0])
    })
}

// ! asyn/ await 
async function allfunctionCaller() {
    const data = await getData()
    console.log(data);
    const display = await displaydata(data) // karon ami cie getdata value displaydata te dite
    console.log(display);
    const ui  = await uidata(display) // data / display je kono kicu use korte 
    console.log(ui);
}
allfunctionCaller()

//=============================================================================================

// aebabe  amra async / await use kore promise advance version use korte pari
// revise  2.0 
// lets one more practise
// =======================================================================================================
// getdata
// display data
// ui data
// main data

getdata
function getdata() {
    return new Promise((resolve,reject)=>{
       fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json()
       }).then((data)=>{
            resolve(data)
       }).catch((err)=>{
            reject(err)
       })
    })
}

function uidata(ui_data){
    return new Promise((resolve1,reject1)=>{
        resolve1(ui_data)
    })
}

function displaydata(display_data){
    return new Promise((resolve2, reject2)=>{
        resolve2(display_data)
    })
}


function maindata(maindataInput){
    return new Promise((resolve3,reject3)=>{
        resolve3(maindataInput[0])
    })  
}

// aysnc and await 

async function allfunctionCaller() {
    const data  = await  getdata() // await na dile promise pending dekabe
    console.log(data);
    const secondFunction = await uidata(data)
    console.log(secondFunction);
    const thirdFunction = await displaydata(secondFunction) // data / thirdfunction 
    console.log(thirdFunction);

    const fourthFunction = await maindata(thirdFunction) 
    console.log(fourthFunction.name);
}
allfunctionCaller()

// ================================================================================

// ! ==================================== PROMISE DOT ALL ====================================
// ================================================================================
const promise1 = Promise.resolve(4)
const promise2 = Promise.resolve(5)
const promise3 = new Promise((resolve,reject)=>{
    resolve("hello")
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value); // [ 4, 5, 'hello' ]
})
// ================================================================================
//  2.0
// onek gula promise ke eksate kaj korta promise.all ase 
// ! jodi ekta reject ase tobe promise.all kaj kore na

const promise1 = Promise.resolve(4)
const promise2 = Promise.resolve(40)
const promise3 = Promise.resolve(400)
const promise4 = new Promise ((resolve,reject)=>{
    resolve("hello")
    // reject("hello")
})

Promise.all([promise1,promise2,promise3,promise4]).then((value)=>{
    console.log(value); // array return korce  [ 4, 40, 400, 'hello' ]
})

// ! ==================================== PROMISE DOT ALL ====================================