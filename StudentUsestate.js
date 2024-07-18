// function Usestate(){
//     var a = 2
//     function myfunc(getdata){

import { useState } from "react"

// import { useState } from "react";

//         console.log(getdata)
//         return a;

//     }                                      ///// The problem and write a more code for
/// solving therefore wew use usestate
//     return <>
//      <h3>studentusestate</h3>
//      <p>value of a = {a}</p>
//      <p>myfunc:{myfunc()}
//      </p>
//      <button onClick={()=>myfunc(4)}>submit</button>

//     </>
// }
// export default  Usestate

function StudentUsestate(){

       const[data,newdata]= useState(2)
       function myfunc(getdata){
        newdata(getdata)

       }



    return <>
      <h3>studentusestate</h3>
      <p>data:{data}</p>
     
      <button onClick={()=>myfunc(4)}>submit</button>
    
     </>
}
export default StudentUsestate





