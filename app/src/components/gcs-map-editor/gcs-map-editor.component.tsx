import React, { useState } from 'react';
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import GcsMapEditorControls from '../gcs-map-editor-controls/gcs-map-editor-controls.component';
import turf from 'turf';

import { getFeatureStyle, getEditHandleStyle } from './gcs-map-editor.styles';

const GcsMapEditor = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const [pointGrid, setPointGrid] = useState<any>(null);
  const [mode, setMode] = useState<any>(null);
  let editorRef: any = null;

  const onDraw = () => {
    if(editorRef.getFeatures().length === 0) {
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
    }
    setPointGrid(null);
  };

  const onMakePointCloud = () => {
    console.log(mode);
    // console.log('up------up');
    // console.log(editorRef.getFeatures());
    // console.log('up-----up');
    let test = turf.bbox(editorRef.getFeatures()[0]);
    console.log(test);
    console.log(editorRef);
    let testPoly = turf.bboxPolygon(test);
    editorRef.addFeatures(testPoly);
    // console.log('aaa---------aaaa');
    // console.log(editorRef.getFeatures());
    // console.log('aaa---------aaaa');

    let test2 = turf.pointGrid(test, 10, 'meters');
    setPointGrid(test2);

    // console.log(editorRef.getFeatures());
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

export default GcsMapEditor;
