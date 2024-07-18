  import React from "react";
  class Myusestate extends React.Component{

constructor(){
    super();
    this.state ={data:2}

}
myfunc(getdata){
//    console.log(getdata)

 this.setState({data:5})

}
    
    render(){

        return (
            <div>
              <h3>Usestateclass</h3>
              <p>statedata:{this.state.data}</p>
              <button onClick={()=>this.myfunc(4)}>submit</button>
            </div>
          )
    }
  }

  export default Myusestate;