import React from "react";
import './App.css';

this.state={
    value:0,
}

let inc=()=>{
    return this.setstate({
        value:this.state.value+1,
    })
}
let dec=()=>{

    return this.setstate({
       value:this.state.value-1,
    })
   }

const App = () => {
    return <>
        <div className="counter">
            <button className="btn btn-danger">-</button>
            <h2>The Value:{this.state.value}</h2>
            <button className="btn btn-primary" onClick={this.inc}>+</button>
        </div>
    </>;
}
export default App;