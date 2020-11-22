import React from 'react';
import { Icon } from 'rsuite';

import ControllerIcon4 from './../../static/svg/controller-3.svg';
import ControllerIconClicked4 from './../../static/svg/controller-clicked-3.svg';
import ControllerIcon5 from './../../static/svg/controller-4.svg';
import ControllerIconClicked5 from './../../static/svg/controller-clicked-4.svg';
import { keyMapping } from '../../configurations/key.configuration';

const ControllerRight = ({
  keyState,
  mouseDownCallback,
  mouseUpCallback,
  style,
}: any) => {
  return (
    <div style={style}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <div>
          <Icon
            icon={keyState.arm ? ControllerIconClicked5 : ControllerIcon5}
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.ARM });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.ARM });
            }}
          />
        </div>
        <div>
          <div>
            <Icon
              icon={keyState.throttleUp ? ControllerIconClicked4 : ControllerIcon4}
              size="5x"
              onMouseDown={() => {
                mouseDownCallback({ key: keyMapping.THROTTLE_UP });
              }}
              onMouseUp={() => {
                mouseUpCallback({ key: keyMapping.THROTTLE_UP });
              }}
            />
          </div>
          <div>
            <Icon
              icon={keyState.throttleDown ? ControllerIconClicked4 : ControllerIcon4}
              size="5x"
              rotate={180}
              onMouseDown={() => {
                mouseDownCallback({ key: keyMapping.THROTTLE_DOWN });
              }}
              onMouseUp={() => {
                mouseUpCallback({ key: keyMapping.THROTTLE_DOWN });
              }}
            />
          </div>
        </div>
        <div>
          <Icon
            icon={keyState.disarm ? ControllerIconClicked5 : ControllerIcon5}
            size="4x"
            onMouseDown={() => {
              mouseDownCallback({ key: keyMapping.DISARM });
            }}
            onMouseUp={() => {
              mouseUpCallback({ key: keyMapping.DISARM });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ControllerRight;
