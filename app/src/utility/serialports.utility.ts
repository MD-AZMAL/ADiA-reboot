import { serialport } from '../../nativeImports';

export const fcDevices = async () => {
    const allPorts =  await serialport.list();
    const connectedPorts =  allPorts.filter(({productId, vendorId}: any) =>  productId && vendorId);

    return connectedPorts;
    
}