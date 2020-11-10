import React from 'react';
import { Header, Navbar, Nav, Icon } from 'rsuite';
import { connect } from 'react-redux';

import { gcsSidebarToggle } from '../../redux/gcs-sidebar/gcs-sidebar.actions';

const GcsHeader = ({ gcsSidebarToggle }: any) => {
  return (
    <Header>
      <Navbar>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="bars" />} onClick={gcsSidebarToggle}>Toggle</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Header>
  );
};

const mapDispatchToPros = (dispatch: any) => ({
  gcsSidebarToggle: () => dispatch(gcsSidebarToggle()),
});

export default connect(null, mapDispatchToPros)(GcsHeader);

// style={{backgroundColor: 'magenta'}}
