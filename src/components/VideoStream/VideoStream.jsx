import React, { Component } from 'react';

class VideoStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamUrl: 'https://c15a-179-211-160-197.ngrok-free.app/', // Substitua pelo IP real do ESP32-CAM
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.streamUrl} alt="Video Stream" />
      </div>
    );
  }
}

export default VideoStream;
