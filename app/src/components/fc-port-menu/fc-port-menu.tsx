import React, { useEffect, useState } from 'react';
import { InputPicker, Button } from 'rsuite';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { usb } from '../../../nativeImports';
import { fcDevices } from '../../utility/serialports.utility';
import { connectFc, disconnectFc, subscribeToIMU } from '../../redux/fc/fc.actions';
import { selectFC, selectIsConnected , selectFCP} from '../../redux/fc/fc.selectors';
import { setTelemetryEmpty } from '../../redux/telemertry/telemetry.actions';

const FcPortMenu = ({FC,FCP,connectFc,disconnectFc,subscribeToImu, setTelemetryEmpty, isConnected} :any) => {
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState('');

  useEffect(() => {
    const getDevices = async () => {
      const ports = await fcDevices();

      setPorts(ports.map(({ path }: any) => ({ value: path, label: path })));
    };

    usb.on('attach', getDevices);
    usb.on('detach', getDevices);

    getDevices();

    return () => {
      usb.removeListener('attach', getDevices);
      usb.removeListener('detach', getDevices);
    }
  }, []);

  const subscribeIMU = () => {
    if(FC != null && FCP != null) {
      console.log('SUBSCRIBING TO IMU')
      subscribeToImu(FC,FCP,0.1);
    }
  } 

  const connectToFc = () => {
    if(FC != null) {
      connectFc(FC,selectedPort,115200);
    }
  };

  const disconnectToFc = () => {
    if(FC != null) {
      disconnectFc(FC);
    }
  }

  const fcConnectTrigger = () => {
    if(!isConnected) {
      connectToFc();
      subscribeIMU();
    } else {
      disconnectToFc();
      setTelemetryEmpty();
    }
  }

  return (
    <div style={{ padding: '.5rem' }}>
      <InputPicker
        data={ports}
        style={{ width: '150px' }}
        onChange={setSelectedPort}
        disabled={isConnected}
      />
      <Button style={{ marginLeft: '.5rem' }} color={isConnected ? "red" : "green"} onClick={fcConnectTrigger}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  FC: selectFC,
  FCP: selectFCP,
  isConnected: selectIsConnected,
});

const mapDispatchToProps = (dispatch: any) => ({
  connectFc: (FC: any, port: string, boudRate: number) => dispatch(connectFc(FC,port,boudRate)),
  disconnectFc : (FC: any) => dispatch(disconnectFc(FC)),
  subscribeToImu: (FC: any,FCP: any, frequency: number) => dispatch(subscribeToIMU(FC,FCP,frequency)),
  setTelemetryEmpty: () => dispatch(setTelemetryEmpty())
});


export default connect(mapStateToProps,mapDispatchToProps)(FcPortMenu);
