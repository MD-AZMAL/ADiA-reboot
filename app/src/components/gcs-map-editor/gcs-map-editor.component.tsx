import React, { useState, useEffect } from 'react';
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import pointsWithinPolygon from '@turf/points-within-polygon';
import bbox from '@turf/bbox';
import pointGrid from '@turf/point-grid';

import {
  setWayPointPolygon,
  setWayPointPolygonNull,
  setWayPointPointCloud,
  setWayPointPointCloudNull,
  writeToFile,
  loadFromFile
} from '../../redux/waypoint/waypoint.actions';

import { selectWayPointPointCloud, selectWayPointPolygon } from '../../redux/waypoint/waypoint.selectors';

import GcsMapEditorControls from '../gcs-map-editor-controls/gcs-map-editor-controls.component';

import { getFeatureStyle, getEditHandleStyle } from './gcs-map-editor.styles';

const GcsMapEditor = ({
  setWayPointPointCloud,
  setWayPointPointCloudNull,
  setWayPointPolygonNull,
  polygon,
  loadFromFile,
  pointCloud,
  writeToFile
}: any) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const [mode, setMode] = useState<any>(null);
  let editorRef: any = null;

  useEffect(()=> {
    console.log('here in useefffedt')
    if(editorRef.getFeatures().length !== 0) {
      editorRef.deleteFeatures(0);
    }
    
    editorRef.addFeatures(polygon);

    console.log(editorRef.getFeatures())
  },[pointCloud])

  const onDraw = () => {
    if (editorRef.getFeatures().length === 0) {
      setMode(new DrawPolygonMode());
    }
  };

  const onSelect = (options: any) => {
    // console.log(options);
    // console.log('---------mode-----');
    // console.log(mode);
    console.log(options);
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
    
  };

  const onUpdate = (options: any) => {
    if (options.editType === 'addFeature') {
      // setWayPointMode(new EditingMode());
      setMode(new EditingMode());
    }
  };

  const onDelete = () => {
    // const selectedIndex = selectedFeatureIndex;
    // if (selectedIndex !== null && selectedIndex >= 0) {
      editorRef.deleteFeatures(0);
      setWayPointPointCloudNull();
      setWayPointPolygonNull();
    // }
  };

  const onMakePointCloud = () => {
    if (editorRef.getFeatures().lenth !== 0) {
      // console.log(mode);
      // console.log('up------up');
      // console.log(editorRef.getFeatures());
      // console.log('up-----up');
      let boundingBoxFromPolygon = bbox(editorRef.getFeatures()[0]);
      // console.log(test);
      // console.log(editorRef);
      // let testPoly = turf.bboxPolygon(test);
      // editorRef.addFeatures(testPoly);
      // console.log('aaa---------aaaa');
      // console.log(editorRef.getFeatures());
      // console.log('aaa---------aaaa');

      let pointCloudFromBoundingBox = pointGrid(boundingBoxFromPolygon, 10,{units: 'meters'});

      console.log('point cloud');
      console.log(pointCloudFromBoundingBox);
      console.log('polygon');
      console.log(editorRef.getFeatures()[0]);

      let pointsInPolygon = pointsWithinPolygon(
        pointCloudFromBoundingBox,
        editorRef.getFeatures()[0]
      );

      setWayPointPointCloud(pointsInPolygon);

      // console.log(editorRef.getFeatures());
    }
  };

  const onExecuteMission = () => {
    writeToFile(pointCloud,'pointCloud.txt');
    if(editorRef.getFeatures().length !== 0) {
      let polygonData = editorRef.getFeatures()[0]
      writeToFile(polygonData,'polygon.txt');
    }
  };

  const onLoadFromFile = async () => {
    loadFromFile('polygon.txt','polygon');
    loadFromFile('pointCloud.txt','pointCloud'); 
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
        onClickButton5={onLoadFromFile}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pointCloud: selectWayPointPointCloud,
  polygon: selectWayPointPolygon,
});

const mapDispatchToProps = (dispatch: any) => ({
  setWayPointPolygon: (polygon: any) => dispatch(setWayPointPolygon(polygon)),
  setWayPointPointCloud: (pointCloud: any) =>
    dispatch(setWayPointPointCloud(pointCloud)),
  setWayPointPointCloudNull: () => dispatch(setWayPointPointCloudNull()),
  setWayPointPolygonNull: () => dispatch(setWayPointPolygonNull()),
  writeToFile: (polygon: any, fileName: string) => dispatch(writeToFile(polygon,fileName)),
  loadFromFile: (fileName: string, type: string) => dispatch(loadFromFile(fileName,type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GcsMapEditor);
