import React, { Component } from 'react'

export class DigitalClicker extends Component {
   state = {
    timesClicked: 0 
   }

   simulate = () => {
       let newNum = this.state.timesClicked + 1 
       this.setState({timesClicked: newNum})
   }
    render() {
        return (
            <div>
                <button onClick={this.simulate}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker

