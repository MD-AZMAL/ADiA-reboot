import React from 'react';
import { Icon } from 'rsuite';

import { keyMapping } from '../../configurations/key.configuration';

import ControllerIcon2 from './../../static/svg/controller-1.svg';
import ControllerIcon3 from './../../static/svg/controller-2.svg';
import ControllerIcon4 from './../../static/svg/controller-3.svg';
import ControllerIconClicked2 from './../../static/svg/controller-clicked-1.svg';
import ControllerIconClicked3 from './../../static/svg/controller-clicked-2.svg';
import ControllerIconClicked4 from './../../static/svg/controller-clicked-3.svg';

const ControllerLeft = ({keyState, mouseDownCallback, mouseUpCallback, style} : any) => {
  return (
    <div style={style}>
      <div
        style={{
          width: '270px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Icon
          icon={keyState.yawLeft ? ControllerIconClicked4 : ControllerIcon4}
          size="5x"
          onMouseDown={() => {
            mouseDownCallback({ key: keyMapping.YAW_LEFT });
          }}
          onMouseUp={() => {
            mouseUpCallback({ key: keyMapping.YAW_LEFT });
          }}
        />

        <Icon
          icon={keyState.yawRight ? ControllerIconClicked4 : ControllerIcon4}
          size="5x"
          onMouseDown={() => {
            mouseDownCallback({ key: keyMapping.YAW_RIGHT });
          }}
          onMouseUp={() => {
            mouseUpCallback({ key: keyMapping.YAW_RIGHT });
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '270px' }}>
          <Icon
            icon={
              keyState.pitchForward ? ControllerIconClicked2 : ControllerIcon2
            }
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.PITCH_FORWARD });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.PITCH_FORWARD });
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '270px',
          }}
        >
          <Icon
            icon={keyState.rollLeft ? ControllerIconClicked2 : ControllerIcon2}
            rotate={-90}
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.ROLL_LEFT });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.ROLL_LEFT });
            }}
          />
          <Icon
            icon={keyState.pressed ? ControllerIconClicked3 : ControllerIcon3}
            size="3x"
          />
          <Icon
            icon={keyState.rollRight ? ControllerIconClicked2 : ControllerIcon2}
            rotate={90}
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.ROLL_RIGHT });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.ROLL_RIGHT });
            }}
          />
        </div>
        <div style={{ width: '270px', marginTop: '.25rem' }}>
          <Icon
            icon={
              keyState.pitchBackward ? ControllerIconClicked2 : ControllerIcon2
            }
            rotate={180}
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.PITCH_BACKWARD });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.PITCH_BACKWARD });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ControllerLeft;
