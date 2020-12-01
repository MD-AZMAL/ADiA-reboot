import React from 'react';
import { IconButton, Icon } from 'rsuite';

const GcsMapEditorControls = ({onClickButton1, onClickButton2, onClickButton3, onClickButton4}: any) => {
  return (
    <div className="mapboxgl-ctrl-top-left">
      <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <IconButton
          icon={<Icon icon="paint-brush" />}
          size="sm"
          title="Polygon tool (p)"
          onClick={onClickButton1}
        />

        <IconButton
          icon={<Icon icon="trash2" />}
          size="sm"
          title="Delete"
          onClick={onClickButton2}
        />

        <IconButton
          icon={<Icon icon="play" />}
          size="sm"
          title="execute"
          onClick={onClickButton3}
        />

        <IconButton
          icon={<Icon icon="play" />}
          size="sm"
          title="execute"
          onClick={onClickButton4}
        />
      </div>
    </div>
  );
};

export default GcsMapEditorControls;
