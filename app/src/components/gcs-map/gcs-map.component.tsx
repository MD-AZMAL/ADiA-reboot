import React, { useState, useRef } from 'react';
import ReactMapGL from 'react-map-gl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import { IconButton, Icon } from 'rsuite';

import { selectMapStyle } from '../../redux/map-configuration/map-configuration.selectors';
import { selectGcsExpanded } from '../../redux/gcs-sidebar/gcs-sidebar.selectors';
import { getFeatureStyle, getEditHandleStyle } from './gcs-map.styles';

const GcsMap = ({ expanded, mapStyle }: any) => {
  const [viewport, setViewport] = useState({
    latitude: 20.462521,
    longitude: 85.8829895,
    zoom: 15,
  });

  const [mode, setMode] = useState<any>(null);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  let editorRef: any = null;

  const displayViewPort = () => {
    console.log(viewport);
  };

  // draw tools

  const _onSelect = (options: any) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  };

  const _onUpdate = ({ editType }: any) => {
    if (editType === 'addFeature') {
      setMode(new EditingMode());
    }
  };

  const _onDelete = () => {
    const selectedIndex = selectedFeatureIndex;
    if (selectedIndex !== null && selectedIndex >= 0) {
      editorRef.deleteFeatures(selectedIndex);
    }
  };

  const _onExecute = () => {
    console.log(mode);
    console.log('------');
    console.log(editorRef.getFeatures());
  }

  const _renderDrawTools = () => {
    // copy from mapbox
    return (
      <div className="mapboxgl-ctrl-top-left">
        <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
          <IconButton
            icon={<Icon icon="paint-brush" />}
            size="sm"
            title="Polygon tool (p)"
            onClick={() => setMode(new DrawPolygonMode())}
          />

          <IconButton
            icon={<Icon icon="trash2" />}
            size="sm"
            title="Delete"
            onClick={_onDelete}
          />

          <IconButton
            icon={<Icon icon="play" />}
            size="sm"
            title="execute"
            onClick={_onExecute}
          />
        </div>
      </div>
    );
  };

  return (
    <ReactMapGL
      {...viewport}
      keyboard={false}
      maxZoom={20}
      width={expanded ? `calc(100vw - 260px)` : `calc(100vw - 56px)`}
      height="calc(100vh - 56px)"
      mapStyle={mapStyle === '' ? undefined : mapStyle}
      mapboxApiAccessToken="pk.eyJ1IjoibWRhem1hbCIsImEiOiJja2g5a3I5YTIwdmNvMnFvODZiM25sNm02In0.CA9elIGQW4XeHIIGD5fgmQ"
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
      }}
      // onClick={(nextViewport) => {
      //   console.log(nextViewport.lngLat);
      // }}
    >
      <Editor
        ref={(_) => (editorRef = _)}
        style={{ width: '100%', height: '100%' }}
        clickRadius={12}
        mode={mode}
        onSelect={_onSelect}
        onUpdate={_onUpdate}
        editHandleShape={'circle'}
        featureStyle={getFeatureStyle}
        editHandleStyle={getEditHandleStyle}
      />
      {_renderDrawTools()}
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
