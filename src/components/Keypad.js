import React, { Component } from 'react';

class Keypad extends Component {
    state = {  }

    keyUp = () => {
        console.log('Entering password...')
    }

    render() { 
        return ( <input onKeyUp={this.keyUp} type="password" /> );
    }
}
 
export default Keypad;