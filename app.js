/*console.log("Hello world");
const add=(a,b)=>{return(a+b);}
const sub=(a,b)=>{return(a-b);}
const mul=(a,b)=>{return(a*b);}
const div=(a,b)=>{return(a/b);}
const {add,sub,mul,div} = require('./operation');
console.log( `The sum is ${add(1,2)}`);
console.log(`The difference is ${sub(3,4)}`);
console.log(`The multilpied value is${mul(4,4)}`);
console.log(`The Quotient is ${div(20,4)}`);*/
// const { add,sub,mul,div } = require('./Operations');
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(1,2));
// console.log(div(1,2));

//promise

function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err){
                reject('Something is happened')
            }
        })
    })
}

//....to read data from file....//
const fs = require('fs');//importing library
// fs.readFile(`${__dirname}/sample.txt`,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

//promise

function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err){
                reject('Something is happened')
                return;
            }
            resolve(data);        })
    })
}

function write(filePath,input){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,input,(err)=>{
            if(err){
                reject('Something is happened')
                return;
            }
            resolve('Write Completed');       
         })
    })
}

// read(`${__dirname}/sample.txt`)//read
// .then((data)=>{
//     return write(`${__dirname}/sample.txt`,data.toString()+ ' Test');//write
// })
// .then((msg)=>{
//     console.log(msg);//write
// }).catch((err)=>{
//     console.log(err);//if there is err  it will display
// })
 const doFileOperations= async ()=>  {// async is a key word
 try{
    const data= await read(`${__dirname}/sample1.txt`);
    const msg=await write(`${__dirname}/sample.txt`,data+'testing again');
    console.log(data.toString());
 }catch(error){
    console.log(error);
 }
 }   
 doFileOperations();                                             

//....to write data from file....//
// fs.writeFile(`${__dirname}/sample1.txt`,'Hello Sandhiya',(err)=>{
//     if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("Written Successfully");
//             }
// })