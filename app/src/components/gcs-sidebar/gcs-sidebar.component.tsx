import React from 'react';
import { Dropdown, Icon, Nav, Sidebar, Sidenav } from 'rsuite';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';
import MapStyleDropdown from '../map-style-dropdown/map-style-dropdown.component';

const GcsSidebar = ({expanded} : any) => {
  return (
    <Sidebar width={expanded ? 260 : 56} style={{height: '100vh'}} collapsible>
      <Sidenav  expanded={expanded}>
        <Sidenav.Body >
          <Nav>
            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                User Group
              </Nav.Item>
              <MapStyleDropdown eventKey="3" />
              <Dropdown
                placement="rightStart"
                eventKey="4"
                title="Settings"
                icon={<Icon icon="gear-circle" />}
              >
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};

const mapStateToProps = createStructuredSelector({
    expanded: selectGcsExpanded
});

export default connect(mapStateToProps)(GcsSidebar);

//backgroundColor:'cyan', 
//style={{backgroundColor:'cyan'}}