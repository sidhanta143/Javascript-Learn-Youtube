
//  for loops 

// for(let  i=1;i<=10;i++){
//     // console.log(i);
//     if(i==5){
//         console.log("The element is found in index");
//         break;
        
//     }
    // else{
    //     console.log("The ellement is not found ");
        
    // }
    // console.log(i);
    
    
// }


// const myarr=["sidhanta","Raja","Ankita"]

// for(let i=0;i<myarr.length;i++){
//     for(let j=i;j<myarr.length;j++){
        
//     }
//     console.log(myarr[i]);
    
// }


// *********************while loops ****************************
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
    

// }


// let myarr=["sihanta","google","Ankita"]

// let arr=0;
// while(arr<myarr.length){
//     console.log(`The array element are ${myarr[arr]}`);
//     arr++;

// }


// ********************Do-while loops********************************



// let arr=[1,2.5,5]
// let i=0;
// do{
// console.log(`The elements are ${arr[i]}`);
// i++;
// }
// while(i<arr.length){
//     // console.log(`The elements are ${arr[i]}`);

// }



// ************************for of loop..................>


// 1. for of looop......

// const arr=[1,2,34,5,6,8,9,89]
// for(const i of arr){
//     console.log(i);
    
// }

// map .....................>


const map=new Map()
map.set("name","sidhanta");
map.set('id','31313')

// console.log(map);


for(const [key ,value] of map){
    console.log(key ,':=>',value);
    
}


