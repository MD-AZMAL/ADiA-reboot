import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectMapStyle } from '../../redux/map-configuration/map-configuration.selectors';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';
import TelemetryCard from '../telemetry-card/telemetry-card.component';

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
    >
      <div style={{position:'absolute', right:15, bottom:20}}>
      <TelemetryCard icon='adn' name='Accel' labelX='X' labelY='Y' labelZ='Z' valX={100} valY={200} valZ={300}/>
      <TelemetryCard icon='ge' name='Gyro' labelX='X' labelY='Y' labelZ='Z' valX={100} valY={200} valZ={300}/>
      </div>
    </ReactMapGL>
  );
};

const mapStateToProps = createStructuredSelector({
  expanded: selectGcsExpanded,
  mapStyle: selectMapStyle
});

export default connect(mapStateToProps)(GcsMap);
