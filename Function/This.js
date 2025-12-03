
// Arror function .................>
// This key word................>
// This key words is give responce of the current object.


//  const user={

//     username:"sidhanta",
//     price:12136,
//     welcomemsg:function(){
//         console.log(`${ this.username} , Welcome to my website.`);
        
//     }
//  } 
//  user.welcomemsg()
//  user.username="sidhi"
//  user.welcomemsg()



// 1St create object .......>

// const obj={
//     username:"sidhanta",
//     age:25,
//     wel:function(){
//         console.log(`welcome to my website ${this.username}`);
//         console.log((this));
        
//     }
// }
// console.log(this);

// obj.wel()


// function chai(){
//     console.log(this);
    
// }
// chai();


// const chai= ()=>{
//     let name="sidhanta"
//     console.log(this);

// }
// // console.log(chai());
// chai()


// const addnum=(num1,num2)=>(num1+num2);
// const addnum=(num1,num2)=>{{username:"sidhanta"}};

// console.log(addnum());


const arr=()=>{
    console.log("sidhanta");
    
}
// arr()



// Immediately Invoked function Expressions (IIFE)

(function name(){
    console.log("sihanta");
    
})();


(
 (name)=>{
        console.log(`${name}`);
        
    }
)("Ankita")