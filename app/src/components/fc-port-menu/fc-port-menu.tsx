import React, { useEffect, useState } from 'react';
import { InputPicker, Button } from 'rsuite';
import { usb } from '../../../nativeImports';
import { fcDevices } from '../../utility/serialports.utility';

const FcPortMenu = () => {
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

  return (
    <div style={{ padding: '.5rem' }}>
      <InputPicker
        data={ports}
        style={{ width: '150px' }}
        onChange={setSelectedPort}
      />
      <Button style={{ marginLeft: '.5rem' }} color="green">
        Connect
      </Button>
    </div>
  );
};

export default FcPortMenu;
