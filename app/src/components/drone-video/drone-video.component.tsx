import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'rsuite';
import Webcam from 'react-webcam';
import { createStructuredSelector } from 'reselect';

import {
  selectIsVideoStreaming,
  selectSelectedVideoDevice,
} from '../../redux/video/video.selectors';

const DroneVideo = ({ isVideoStreaming, selectVideoDevice }: any) => {
  console.log(selectVideoDevice)
  return (
    <Container
      style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
    >
      {isVideoStreaming && selectVideoDevice ? (
        <Webcam
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          videoConstraints={{ deviceId: selectVideoDevice.deviceId }}
        />
      ) : (<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
        <p>Select a valid video device first </p>
      </div>)}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  isVideoStreaming: selectIsVideoStreaming,
  selectVideoDevice: selectSelectedVideoDevice,
});

export default connect(mapStateToProps)(DroneVideo);
