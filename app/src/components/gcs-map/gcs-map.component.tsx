import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import { selectMapStyle } from '../../redux/map-configuration/map-configuration.selectors';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';

import GcsMapEditor from '../gcs-map-editor/gcs-map-editor.component';
import GcsPointCloudComponent from '../gcs-point-cloud/gcs-point-cloud.component';

const GcsMap = ({ expanded, mapStyle }: any) => {

  const width = expanded ? `calc(100vw - 260px)` : `calc(100vw - 56px)`;
  const height = 'calc(100vh - 56px)';

  const [viewport, setViewport] = useState({
    latitude: 20.462521,
    longitude: 85.8829895,
    zoom: 15,
  });

  return (
    <ReactMapGL
      {...viewport}
      keyboard={false}
      maxZoom={20}
      width={width}
      height={height}
      mapStyle={mapStyle === '' ? undefined : mapStyle}
      mapboxApiAccessToken="pk.eyJ1IjoibWRhem1hbCIsImEiOiJja2g5a3I5YTIwdmNvMnFvODZiM25sNm02In0.CA9elIGQW4XeHIIGD5fgmQ"
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
      }}
    >
      <GcsMapEditor  />
      <GcsPointCloudComponent />
    </ReactMapGL>
  );
};

const mapStateToProps = createStructuredSelector({
  expanded: selectGcsExpanded,
  mapStyle: selectMapStyle,
});

export default connect(mapStateToProps)(GcsMap);

// "resolutions": {
//   "@turf/difference": "6.0.1"
// }, in package JSON

// and install @turf/difference@6.0.1
