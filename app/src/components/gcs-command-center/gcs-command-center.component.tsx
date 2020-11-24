import React from 'react';
// import { Container } from 'rsuite';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import Webcam from 'react-webcam';

import GcsMap from '../gcs-map/gcs-map.component';
import Stack from '../stack/stack.component';
import Telemetry from '../telemetry/telemetry.component';
import Controller from '../controller/controller.component';
import StackChild from '../stack-child/stack-child.component';
import DroneVideo from '../drone-video/drone-video.component';
import { selectIsVideoEnabled } from '../../redux/video/video.selectors';

const GcsCommandCenter = ({isVideoEnabled}: any) => {
  return (
    <Stack>
      <StackChild Component={GcsMap} position="relative" />
      <StackChild
        Component={Telemetry}
        position="absolute"
        right={15}
        top={15}
        zIndex={3}
      />
      <StackChild
        Component={DroneVideo}
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        zIndex={isVideoEnabled ? 2 : -1}
      />
      <StackChild Component={Controller} zIndex={3}/>
    </Stack>
  );
};

const mapStateToProps = createStructuredSelector({
  isVideoEnabled: selectIsVideoEnabled
});

export default connect(mapStateToProps)(GcsCommandCenter);

