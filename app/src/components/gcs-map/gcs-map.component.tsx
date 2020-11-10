import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const GcsMap = ({expanded}: any) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width= {expanded ? `calc(100vw - 260px)` : `calc(100vw - 56px)` }
      height= 'calc(100vh - 56px)'
      mapboxApiAccessToken="pk.eyJ1IjoibWRhem1hbCIsImEiOiJja2g5a3I5YTIwdmNvMnFvODZiM25sNm02In0.CA9elIGQW4XeHIIGD5fgmQ"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  expanded: selectGcsExpanded
});

export default connect(mapStateToProps)(GcsMap);
