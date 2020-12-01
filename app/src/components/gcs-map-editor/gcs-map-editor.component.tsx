import React, { useState } from 'react';
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import { connect } from 'react-redux';
import turf from 'turf';

import {
  setWayPointPointCloud,
  setWayPointPointCloudNull,
} from '../../redux/waypoint/waypoint.actions';
import GcsMapEditorControls from '../gcs-map-editor-controls/gcs-map-editor-controls.component';

import { getFeatureStyle, getEditHandleStyle } from './gcs-map-editor.styles';

const GcsMapEditor = ({
  setWayPointPointCloud,
  setWayPointPointCloudNull,
}: any) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const [mode, setMode] = useState<any>(null);
  let editorRef: any = null;

  const onDraw = () => {
    if (editorRef.getFeatures().length === 0) {
      setMode(new DrawPolygonMode());
    }
  };

  const onSelect = (options: any) => {
    // console.log(options);
    // console.log('---------mode-----');
    // console.log(mode);
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  };

  const onUpdate = (options: any) => {
    if (options.editType === 'addFeature') {
      // setWayPointMode(new EditingMode());
      setMode(new EditingMode());
    }
  };

  const onDelete = () => {
    const selectedIndex = selectedFeatureIndex;
    if (selectedIndex !== null && selectedIndex >= 0) {
      editorRef.deleteFeatures(selectedIndex);
      setWayPointPointCloudNull();
    }
  };

  const onMakePointCloud = () => {
    if (editorRef.getFeatures().lenth !== 0) {
      // console.log(mode);
      // console.log('up------up');
      // console.log(editorRef.getFeatures());
      // console.log('up-----up');
      let boundingBoxFromPolygon = turf.bbox(editorRef.getFeatures()[0]);
      // console.log(test);
      // console.log(editorRef);
      // let testPoly = turf.bboxPolygon(test);
      // editorRef.addFeatures(testPoly);
      // console.log('aaa---------aaaa');
      // console.log(editorRef.getFeatures());
      // console.log('aaa---------aaaa');

      let pointCloudFromBoundingBox = turf.pointGrid(
        boundingBoxFromPolygon,
        10,
        'meters'
      );
      setWayPointPointCloud(pointCloudFromBoundingBox);

      // console.log(editorRef.getFeatures());
    }
  };

  const onExecuteMission = () => {
    console.log(editorRef.getFeatures());
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Editor
        ref={(_) => (editorRef = _)}
        style={{ width: '100%', height: '100%' }}
        clickRadius={12}
        mode={mode}
        onSelect={onSelect}
        onUpdate={onUpdate}
        editHandleShape={'circle'}
        featureStyle={getFeatureStyle}
        editHandleStyle={getEditHandleStyle}
      />
      <GcsMapEditorControls
        onClickButton1={onDraw}
        onClickButton2={onDelete}
        onClickButton3={onMakePointCloud}
        onClickButton4={onExecuteMission}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setWayPointPointCloud: (pointCloud: any) =>
    dispatch(setWayPointPointCloud(pointCloud)),
  setWayPointPointCloudNull: () => dispatch(setWayPointPointCloudNull()),
});

export default connect(null, mapDispatchToProps)(GcsMapEditor);
