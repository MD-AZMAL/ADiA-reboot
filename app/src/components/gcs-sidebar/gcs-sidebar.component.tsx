import React from 'react';
import { Dropdown, Icon, Nav, Sidebar, Sidenav } from 'rsuite';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import TelemetryCard from '../telemetry-card/telemetry-card.component';

import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';
import MapStyleDropdown from '../map-style-dropdown/map-style-dropdown.component';
import { gcsSidebarToggle } from '../../redux/gcs-sidebar/gcs-sidebar.actions';

const GcsSidebar = ({expanded, gcsSidebarToggle} : any) => {
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
              <Nav.Item eventKey="5" icon={<Icon icon="group" />} onClick={gcsSidebarToggle}>
                Close
              </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};

const mapStateToProps = createStructuredSelector({
    expanded: selectGcsExpanded
});

const mapDispatchToProps = (dispatch: any) => ({
  gcsSidebarToggle: () => dispatch(gcsSidebarToggle())
});

export default connect(mapStateToProps,mapDispatchToProps)(GcsSidebar);

//backgroundColor:'cyan',
//style={{backgroundColor:'cyan'}}
