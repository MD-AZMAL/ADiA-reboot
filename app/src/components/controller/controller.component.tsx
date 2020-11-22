import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { keyMapping } from '../../configurations/key.configuration';

import { createStructuredSelector } from 'reselect';
import { selectIsRcEnabled } from '../../redux/fc/fc.selectors';
import {sendRawRc} from '../../redux/fc/fc.actions';
import ControllerLeft from '../controller-left/controller-left.component';
import ControllerRight from '../controller-right/controller-right.component';

const Controller = ({ isRcEnabled,sendRawRc }: any) => {
  const [sendRcInterval, setSendRcInterval] = useState<NodeJS.Timeout>(
    (0 as unknown) as NodeJS.Timeout
  );

  const [keyState, setKeyState] = useState({
    yawLeft: false,
    yawRight: false,
    pitchForward: false,
    pitchBackward: false,
    rollLeft: false,
    rollRight: false,
    throttleUp: false,
    throttleDown: false,
    arm: false,
    disarm: false,
    pressed: false,
  });

  let keyStatus = {
    yawLeft: false,
    yawRight: false,
    pitchForward: false,
    pitchBackward: false,
    rollLeft: false,
    rollRight: false,
    throttleUp: false,
    throttleDown: false,
    arm: false,
    disarm: false,
    pressed: false,
  };

  const keyDownCallback = (event: any) => {
    switch (event.key.toLowerCase()) {
      case keyMapping.YAW_LEFT:
        keyStatus.yawLeft = true;
        break;
      case keyMapping.YAW_RIGHT:
        keyStatus.yawRight = true;
        break;
      case keyMapping.PITCH_FORWARD:
        keyStatus.pitchForward = true;
        break;
      case keyMapping.PITCH_BACKWARD:
        keyStatus.pitchBackward = true;
        break;
      case keyMapping.ROLL_LEFT:
        keyStatus.rollLeft = true;
        break;
      case keyMapping.ROLL_RIGHT:
        keyStatus.rollRight = true;
        break;
      case keyMapping.THROTTLE_UP:
        keyStatus.throttleUp = true;
        break;
      case keyMapping.THROTTLE_DOWN:
        keyStatus.throttleDown = true;
        break;
      case keyMapping.ARM:
        keyStatus.arm = true;
        break;
      case keyMapping.DISARM:
        keyStatus.disarm = true;
        break;
    }
    setKeyState({ ...keyStatus });
  };

  const keyUpCallback = (event: any) => {
    switch (event.key.toLowerCase()) {
      case keyMapping.YAW_LEFT:
        keyStatus.yawLeft = false;
        break;
      case keyMapping.YAW_RIGHT:
        keyStatus.yawRight = false;
        break;
      case keyMapping.PITCH_FORWARD:
        keyStatus.pitchForward = false;
        break;
      case keyMapping.PITCH_BACKWARD:
        keyStatus.pitchBackward = false;
        break;
      case keyMapping.ROLL_LEFT:
        keyStatus.rollLeft = false;
        break;
      case keyMapping.ROLL_RIGHT:
        keyStatus.rollRight = false;
        break;
      case keyMapping.THROTTLE_UP:
        keyStatus.throttleUp = false;
        break;
      case keyMapping.THROTTLE_DOWN:
        keyStatus.throttleDown = false;
        break;
      case keyMapping.ARM:
        keyStatus.arm = false;
        break;
      case keyMapping.DISARM:
        keyStatus.disarm = false;
        break;
    }
    setKeyState({ ...keyStatus });
  };

  const mouseDownCallback = (event: any) => {
    if (isRcEnabled) {
      keyDownCallback(event);
    }
  };

  const mouseUpCallback = (event: any) => {
    if (isRcEnabled) {
      keyUpCallback(event);
    }
  };

  useEffect(() => {

    const sendRawRcCallback = () => {
      console.log(`Started`);
      sendRawRc(keyStatus);
    }
    
    if (isRcEnabled) {
      document.addEventListener('keydown', mouseDownCallback);
      document.addEventListener('keyup', mouseUpCallback);
      setSendRcInterval(setInterval(sendRawRcCallback,100))
    } else {
      keyStatus = {
        yawLeft: false,
        yawRight: false,
        pitchForward: false,
        pitchBackward: false,
        rollLeft: false,
        rollRight: false,
        throttleUp: false,
        throttleDown: false,
        arm: false,
        disarm: false,
        pressed: false,
      }
      setKeyState({...keyStatus});
      document.removeEventListener('keydown', mouseDownCallback);
      document.removeEventListener('keyup', mouseUpCallback);
      clearInterval(sendRcInterval);
    }

    return () => {
      document.removeEventListener('keydown', mouseDownCallback);
      document.removeEventListener('keyup', mouseUpCallback);
      clearInterval(sendRcInterval);
    };
  }, [isRcEnabled]);

  return (
    <>
      <ControllerLeft
        style={{
          opacity: isRcEnabled ? '100%' : '50%',
          position: 'absolute',
          bottom: 30,
        }}
        keyState={keyState}
        mouseDownCallback={mouseDownCallback}
        mouseUpCallback={mouseUpCallback}
      />

      <ControllerRight
        style={{
          opacity: isRcEnabled ? '100%' : '50%',
          position: 'absolute',
          bottom: 30,
          right: 30,
        }}
        keyState={keyState}
        mouseDownCallback={mouseDownCallback}
        mouseUpCallback={mouseUpCallback}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isRcEnabled: selectIsRcEnabled,
});

const mapDispatchToProps = (dispatch: any) => ({
  sendRawRc: (keyStatus: any) =>  dispatch(sendRawRc(keyStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
