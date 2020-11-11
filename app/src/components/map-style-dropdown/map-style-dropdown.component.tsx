import React, { useState } from 'react';
import { Dropdown, Icon } from 'rsuite';
import { connect } from 'react-redux';

import { setMapStyle } from '../../redux/map-configuration/map-configuration.actions';
import { mapStyleUrl } from '../../configurations/map.configuration';

const MapStyleDropdown = ({setMapStyle, ...props}: any) => {
  const [activeKey, setActiveKey] = useState(1);

  const onMapSelect = (mapStyle: string, index: number) => {
    setActiveKey(index);
    setMapStyle(mapStyle);
  };

  return (
    <Dropdown
      placement="rightStart"
      eventKey="3"
      title="Map Style"
      icon={<Icon icon="map" />}
      activeKey={activeKey}
      {...props}
    >
      {mapStyleUrl.map(({ id, title, url }) => (
        <Dropdown.Item
          key={id}
          eventKey={id}
          onClick={() => {
            onMapSelect(url, id);
          }}
        >
          {title}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
    setMapStyle: (url: string) => dispatch(setMapStyle(url))
});

export default connect(null,mapDispatchToProps)(MapStyleDropdown);
