import React, { Component } from 'react';

class EyesOnMe extends Component {
    state = {  }

    focusFunction = () => {
        console.log('Good!');
    }

    blurFunction = () => {
        console.log('Hey! Eyes on me!');
    }

    render() { 
        return ( <button onFocus={this.focusFunction} onBlur={this.blurFunction} > Submit </button> );
    }
}
 
export default EyesOnMe;