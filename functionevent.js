function StudentEvent() {
    function myfunc(e){
        // alert("my func is working")
        console.log("my func is working")
        console.log(e)
    }
  return (
    <>
      <h3>StudentEvent</h3>
{/* 
      <button onClick={myfunc}>submit</button>// javascript code */}
      {/* <button onClick={myfunc()}>submit</button> */}
      {/* <button onClick={()=>myfunc()}>submit</button> */}
      <input type = "text" placeholder = "name" onChange = {(e)=>myfunc(e)}></input>
    </>
  );
}
export default StudentEvent