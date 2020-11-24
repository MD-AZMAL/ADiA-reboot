import React, { useState } from 'react';
import { Header, Navbar, Nav, Icon, Button } from 'rsuite';
import { connect } from 'react-redux';

import { gcsSidebarToggle } from '../../redux/gcs-sidebar/gcs-sidebar.actions';
import FcPortMenu from '../fc-port-menu/fc-port-menu';
import EnableRC from '../enable-rc/enable-rc.component';
import VideoMenu from '../video-menu/video-menu.component';
import ToggleVideo from '../toggle-video/toggle-video.component';

const GcsHeader = ({ gcsSidebarToggle }: any) => {
  return (
    <Header>
      <div style={{display: 'flex', alignItems: 'center', height: '56px' }}>
        <FcPortMenu />
        <VideoMenu />
        <ToggleVideo />
        <div style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>
          <EnableRC />
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
