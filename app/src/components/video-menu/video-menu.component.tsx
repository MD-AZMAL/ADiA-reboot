import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { Button, InputPicker } from 'rsuite';
import { createStructuredSelector } from 'reselect';

import { usb } from '../../../nativeImports';
import { setVideoDevices, setSelectedVideoDeviceById, disconnectStreaming } from '../../redux/video/video.actions';
import { selectVideoDevices, selectIsVideoStreaming } from '../../redux/video/video.selectors';
import { convertMediaDevicesToDataItem, getMediaDevices } from '../../utility/video.utility';

const VideoMenu = ({isVideoStreaming, videoDevices, setVideoDevices, setSelectedVideoDeviceById, disconnectStreaming} : any) => {

    const handleChange = (value: string) => {
        if(value)
            setSelectedVideoDeviceById(value,videoDevices);
        else 
            disconnectStreaming();
    };

    useEffect(() => {
        const getVideoDevices = async () => {
          const getVideoDevices = await getMediaDevices();
          setVideoDevices(getVideoDevices);
        };
    
        usb.on('attach', getVideoDevices);
        usb.on('detach', getVideoDevices);
    
        getVideoDevices();
    
        return () => {
            usb.on('attach', getVideoDevices);
            usb.on('detach', getVideoDevices);
        }
      }, []);

    return (
       <div style={{ marginLeft: '1rem' }}>
           <InputPicker
                data={convertMediaDevicesToDataItem(videoDevices)}
                style={{width: '200px'}}
                // disabled={isVideoStreaming}
                onChange={handleChange}
           />
           <Button style={{ marginLeft: '.5rem' }} onClick={disconnectStreaming} disabled={!isVideoStreaming} color='red'>Stop Streaming</Button>
       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    videoDevices: selectVideoDevices,
    isVideoStreaming: selectIsVideoStreaming,
}); 

const mapDispatchToProps = (dispatch: any) => ({
    setVideoDevices: (devices : any) => dispatch(setVideoDevices(devices)),
    setSelectedVideoDeviceById: (deviceId: any, videoDevices: any) => dispatch(setSelectedVideoDeviceById(deviceId,videoDevices)),
    disconnectStreaming: () => dispatch(disconnectStreaming()),
});


export default connect(mapStateToProps,mapDispatchToProps)(VideoMenu);
