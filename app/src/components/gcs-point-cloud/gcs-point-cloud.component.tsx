import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Marker } from 'react-map-gl';
import { Icon } from 'rsuite';

import { selectWayPointPointCloud } from '../../redux/waypoint/waypoint.selectors';

const GcsPointCloud = ({pointCloud}: any) => {
  return (
    <div>
      {pointCloud &&
        pointCloud.features.map((point: any, key: number) => (
          <Marker
            offsetLeft={-5}
            offsetTop={-15}
            key={key}
            latitude={point.geometry.coordinates[1]}
            longitude={point.geometry.coordinates[0]}
          >
            <Icon icon="circle" style={{ color: '#fcae22' }} />
          </Marker>
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    pointCloud : selectWayPointPointCloud,
});

export default connect(mapStateToProps)(GcsPointCloud);
