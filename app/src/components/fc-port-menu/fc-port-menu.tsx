import React, { useEffect, useState } from 'react';
import { InputPicker, Button, Input } from 'rsuite';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { usb } from '../../../nativeImports';
import { fcDevices } from '../../utility/serialports.utility';
import { connectFc, disconnectFc, subscribeToIMU } from '../../redux/fc/fc.actions';
import { selectIsConnected } from '../../redux/fc/fc.selectors';
import { setTelemetryEmpty } from '../../redux/telemertry/telemetry.actions';

const FcPortMenu = ({connectFc,disconnectFc,subscribeToImu, setTelemetryEmpty, isConnected} :any) => {
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState<string>('');

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

  const fcConnectTrigger = () => {
    if(!isConnected) {
      connectFc(selectedPort,115200);
      subscribeToImu(0.1);
    } else {
      disconnectFc(setTelemetryEmpty);
    }
  }

  return (
    // <>
    <div style={{ padding: '.5rem' , display: 'flex'}} >
     <Input style={{width: '200px', marginRight: '.5rem'}} onChange={(val) => {val === null ? setSelectedPort("") : setSelectedPort(val)}} />
     
      <InputPicker
        data={ports}
        style={{ width: '150px' }}
        disabled={isConnected}
        // onChange={(val) => {val === null ? setSelectedPort("") : setSelectedPort(val)}}
      />
      <Button style={{ marginLeft: '.5rem' }} color={isConnected ? "red" : "green"} onClick={fcConnectTrigger}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </Button>
    </div>
    // </>
  );
};

const mapStateToProps = createStructuredSelector({
  isConnected: selectIsConnected,
});

const mapDispatchToProps = (dispatch: any) => ({
  connectFc: (port: string, boudRate: number) => dispatch(connectFc(port,boudRate)),
  disconnectFc : (setTelemetryEmpty: any) => dispatch(disconnectFc(setTelemetryEmpty)),
  subscribeToImu: (frequency: number) => dispatch(subscribeToIMU(frequency)),
  setTelemetryEmpty: () => dispatch(setTelemetryEmpty())
});


export default connect(mapStateToProps,mapDispatchToProps)(FcPortMenu);
