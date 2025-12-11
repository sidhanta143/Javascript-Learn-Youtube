// new Promise(function(req,res){
//    setTimeout(function(){
//      console.log("Good morning sidhanta");
//      req();
//    },1000)
    
// }).then(function(){
//     console.log("Api is conjumed");
    
// })


// async function sidh(){
//   // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={d1f9a28b6edb7adc9151e1bcb26216a9}
// try{
//   const fet=await fetch('https://randomuser.me/api/')
//   const data=await fet.json()
// console.log(data);
// }catch(error){
//   console.log("E :",error);
  
// }


// }
// sidh();

fetch('https://randomuser.me/api/')
TouchEvent((responce)=>{
  return responce.json()
})
catch((error)=>)