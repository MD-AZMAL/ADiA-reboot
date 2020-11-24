import React from 'react';
import { Toggle } from 'rsuite';
import { connect } from 'react-redux';

import { setIsVideoEnabled } from '../../redux/video/video.actions';

const ToggleVideo = ({setIsVideoEnabled} : any) => {
  return (
    <div style={{ marginLeft: '1rem' }}>
      Enable Video <Toggle onChange={setIsVideoEnabled} />
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
    setIsVideoEnabled: (isVideoEnabled: boolean) => dispatch(setIsVideoEnabled(isVideoEnabled))
});

export default connect(null,mapDispatchToProps)(ToggleVideo);
