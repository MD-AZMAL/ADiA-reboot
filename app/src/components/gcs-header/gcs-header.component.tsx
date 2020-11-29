import React from 'react';
import { Header, ButtonToolbar } from 'rsuite';
import { connect } from 'react-redux';

import { gcsSidebarToggle } from '../../redux/gcs-sidebar/gcs-sidebar.actions';
import FcPortMenu from '../fc-port-menu/fc-port-menu';
import EnableRC from '../enable-rc/enable-rc.component';
import VideoMenu from '../video-menu/video-menu.component';
import ToggleVideo from '../toggle-video/toggle-video.component';
import WaypointControl from '../waypoint-control/waypoint-control.component';

const GcsHeader = ({ gcsSidebarToggle }: any) => {
  return (
    <Header>
      <div style={{ display: 'flex', alignItems: 'center', height: '56px' }}>
        <FcPortMenu />
        <VideoMenu />
        <ToggleVideo />
        {/* <div style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>
        </div> */}
        <div style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>
          <ButtonToolbar>
            {/* <WaypointControl /> */}
            <EnableRC />
          </ButtonToolbar>
        </div>
      </div>
    </Header>
  );
};

const mapDispatchToPros = (dispatch: any) => ({
  gcsSidebarToggle: () => dispatch(gcsSidebarToggle()),
});

export default connect(null, mapDispatchToPros)(GcsHeader);

// style={{backgroundColor: 'magenta'}}
