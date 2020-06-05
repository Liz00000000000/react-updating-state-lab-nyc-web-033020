import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null, 
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBirate = () => {
       if (this.state.settings.bitrate === 8){
       this.setState({settings: {...this.state.settings, bitrate: 12} })
       } else {
        this.setState({settings: {...this.state.settings, bitrate: 8} })
       }
    }

    changeResolution = () => {
        if (this.state.settings.video.resolution === '1080p'){
        this.setState({settings: {...this.state.settings, video: {resolution: '720p'} }})
        } else {
            this.setState({settings: {...this.state.settings, video: {resolution: '1080p'} }}) 
        }
    }


    render() {
        return (
            <div>
                <p>birate: {this.state.settings.bitrate}</p>
                <button onClick={this.changeBirate} className='bitrate'>change birate</button>
                <p>resolution: {this.state.settings.video.resolution}</p>
                <button onClick={this.changeResolution} className='resolution'>Change resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger

