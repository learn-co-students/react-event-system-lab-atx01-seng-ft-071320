// Code Keypad Component Here
import React, { Component } from 'react';


export default class Keypad extends Component {


    keyUpHandler = () => console.log("Entering password...");
        // prints either LoginInput or PwdInput
    

render(){
    return(
        <div>
            <input type="password" 
            onKeyUp={this.keyUpHandler}/>
            </div>
        )
}


}
