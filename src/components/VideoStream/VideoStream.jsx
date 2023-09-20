import React from 'react';
import styled from 'styled-components';
const VideoStream = ()=> {
     const streamUrl = 'https://9cb8-177-193-102-234.ngrok-free.app/';
     
     const Iframe = styled.iframe`
        border:none;
     `
    return (
      <div>
        <h2>Video Stream</h2>
        <Iframe 
          src={streamUrl}
          alt="Video Stream"
          width="800"
          height="600">
          </Iframe>
      </div>
    );
}

export default VideoStream;
