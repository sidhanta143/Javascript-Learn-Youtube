//  Objects syntex--------->
// const obj={
//     name:"sidhanta",
//     age:12
// }
// console.log(obj["name"]);
// console.log(obj.name);


const tinderuser=new Object()
tinderuser.id="123546";
tinderuser.name="sidhanta";
// console.log(tinderuser);

const regularuser={
    email:"sidhanta@gmail.com",
    fullname:"sidhanta",
    age:{
        age:21,


    }

}
// console.log(regularuser);


const ob1={
    1:"a",
    2:"b"
}
const ob2={
    3:"d",
    4:"c"
}
// const obj4=Object.assign(ob1,ob2);
// console.log(obj4);
const obj4={...ob1,...ob2}
// console.log(obj4);



const obj=[
    {
    id:1,
    email:"sihanta@123"
},
    {
    id:1,
    email:"sihanta@123"
},
    {
    id:1,
    email:"sihanta@123"
}
];
// console.log(obj[1].email);
// console.log(obj.keys(tinderuser));
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.values(tinderuser).length);
console.log(tinderuser.hasOwnProperty('id'));



// *****************objects de-structure and json api intro***************


// api--application programmingintroface.


const course={
    price:12000,
    coursenaem:"python data structure",
    courseInstructor:"sidhanta"
}

// const {price}=course
const {price:p}=course
// console.log(p);














