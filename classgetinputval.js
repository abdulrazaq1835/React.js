import React from "react"

class Getinputboxval extends React.Component{
    myfunc(getdata) {
    console.log(getdata.target.value);}       
  
render(){
 
  
  return<>
  <h3>classgetinputvalue</h3>
  {/* <input type="text"placeholder="entername" onChange={this.myfunc}></input> */}
  <input type="text"placeholder="entername" onChange={(e)=>this.myfunc(e)}></input>
 
  </>
 }

}
export default Getinputboxval;