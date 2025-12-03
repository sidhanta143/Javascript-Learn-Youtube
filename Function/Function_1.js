
//  function class ----------->


/*
note--->
1.sidh==> referance of a function .
2.sidh()==> when you give a courley bracket that is called exicuation.

*/

// function sidh(){
//     console.log("sidhanta");
    
// }
// sidh();




// / using functionadding of two numbers ---->

// function add( num1,num2){ // this is called paramenter.
// let num3=num1+num2;
// console.log(num3);

// }
// add(10,null);  // this is called arrgument of a function.




function addition(num,num1){
  
// let result =num+num1;
// console.log("sidhanta");

// return result;
return `The addition result is ${num+num1}`;

}
// console.log(addition(10,20));




// const result=addition(10,20)
// console.log(result);

// addition(10,2);



// function add(a,b){
//     if(a,b===undefined){
//         console.log("please enter the value of a and b ");
      
//     }
// return `The result is ${a+b}`

// }
// console.log(add());







// ********************Function with object ,array and 


// function calculate(...a){     // ... this tree dought is use for rest-operator  
//     return a;

// }
// console.log(calculate(10,20,30,500 ,"sidhanta", {"name":"sidhi",id:120202}));



// acess object to function level.....>
// const user={
//     name:"sidhanta",
//     age:18.11
// }

// function handel(anyobj){
// console.log(`The user name is ${anyobj.name} and age is ${anyobj.age}`);

// }
// handel({
//     name:"ankita",
//     age:20
// })




// const myarray=[10,20,50,6,0];

// function arr(obj){
//     return obj[0];
// }
// console.log(arr(myarray));



// scope of function ............>

// function abc(){
//     let a=10;
//     const b=20;
//     var c=30;  //  when {}-->this bracket when com this is called scope .

// }

function one(){

    const username="sidhanta"

    function two(){
        const id=22212
        console.log(username);
        
    }
    console.log(id);
    two();
    
}
one();
// console.log("sidhanta");

function addition(...num){
    return num;
}
console.log(addition(10,20));





