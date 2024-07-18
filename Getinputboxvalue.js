function Getinputboxvalue(){
 function myfunc(getdata){
    // console.log(getdata.target.value)
    console.log(getdata.target.value)
 }
    return<>
     <h3>Getinputboxvalue</h3>
     {/* <input type="text" placeholder="enterdetails" onChange={myfunc}></input> */}
     <input type="text" placeholder="enterdetails" onChange={(e)=>myfunc(e)}></input>
    </>
} export default Getinputboxvalue;