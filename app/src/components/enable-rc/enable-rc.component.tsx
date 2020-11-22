import React from 'react';
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { disableRc, enableRc } from '../../redux/fc/fc.actions';
import {
  selectIsConnected,
  selectIsRcEnabled,
} from '../../redux/fc/fc.selectors';


const EnableRC = ({ isConnected, isRcEnabled, disableRc, enableRc }: any) => {


  const handleRcEnable = (event: any) => {
    if (isRcEnabled) {
      // disarm and disable
      console.log('IN RC DISABLE');

      disableRc();
    } else {
      // enable rc only
      console.log('IN RC ENABLE');

      enableRc();
    }
    event.target.blur(); // deselect after click
  };

  return (
    <Button
      appearance="primary"
      disabled={!isConnected}
      color={isRcEnabled ? 'red' : 'blue'}
      onClick={handleRcEnable}
    >
      {isRcEnabled ? 'Disable RC' : 'Enable RC'}
    </Button>
  );
};

const mapStateToProps = createStructuredSelector({
  isConnected: selectIsConnected,
  isRcEnabled: selectIsRcEnabled,
});

const mapDispatchToProps = (dispatch: any) => ({
  enableRc: () => dispatch(enableRc()),
  disableRc: () => dispatch(disableRc()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnableRC);
