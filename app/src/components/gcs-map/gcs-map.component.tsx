import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import { selectMapStyle } from '../../redux/map-configuration/map-configuration.selectors';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';

import GcsMapEditor from '../gcs-map-editor/gcs-map-editor.component';

const GcsMap = ({ expanded, mapStyle, mode, setWayPointMode }: any) => {

  const width = expanded ? `calc(100vw - 260px)` : `calc(100vw - 56px)`;
  const height = 'calc(100vh - 56px)';

  const [viewport, setViewport] = useState({
    latitude: 20.462521,
    longitude: 85.8829895,
    zoom: 15,
  });

  const displayViewPort = () => {
    console.log(viewport);
  };

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
      // onClick={(nextViewport) => {
      //   console.log(nextViewport.lngLat);
      // }}
    >
      <GcsMapEditor  />
      {/* {
        pointGrid && pointGrid.features.map((point: any, key: number) => (
          <Marker offsetLeft={-5} offsetTop={-15} key={key} latitude={point.geometry.coordinates[1]} longitude={point.geometry.coordinates[0]}>
            <Icon icon="circle" style={{color: '#fcae22'}}  />
          </Marker>
        ))
      } */}
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
