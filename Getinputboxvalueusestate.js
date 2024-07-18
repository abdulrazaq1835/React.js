import { useState } from "react";


function Getinputboxvalueusestate(){

 const[data,getdata]= useState()
    

    function myfunc(e){
        // alert("myfunc is working")
        console.log(e.target.value)
    

    }
    return<>
    <h3>Getinputboxvalueusestate</h3>
    <input type="text" onChange={(e)=>myfunc(e)}></input>
    <button onClick={()=>myfunc()}>submit</button>
    <p>data:{"abdul"}</p>
    </>
}
export default Getinputboxvalueusestate;