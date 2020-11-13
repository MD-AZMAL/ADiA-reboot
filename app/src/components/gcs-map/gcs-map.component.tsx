import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectMapStyle } from '../../redux/map-configuration/map-configuration.selectors';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';

const GcsMap = ({expanded, mapStyle}: any) => {
  const [viewport, setViewport] = useState({
    latitude: 20.462521,
    longitude: 85.8829895,
    zoom: 13, 
  });

  return (
    <ReactMapGL
      {...viewport}
      width= {expanded ? `calc(100vw - 260px)` : `calc(100vw - 56px)` }
      height= 'calc(100vh - 56px)'
      mapStyle={mapStyle === "" ? undefined : mapStyle} 
      mapboxApiAccessToken="pk.eyJ1IjoibWRhem1hbCIsImEiOiJja2g5a3I5YTIwdmNvMnFvODZiM25sNm02In0.CA9elIGQW4XeHIIGD5fgmQ"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  expanded: selectGcsExpanded,
  mapStyle: selectMapStyle
});

export default connect(mapStateToProps)(GcsMap);
