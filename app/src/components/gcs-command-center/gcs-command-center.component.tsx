import React from 'react'
import GcsMap from '../gcs-map/gcs-map.component'
import Stack from '../stack/stack.component';
import Telemetry from '../telemetry/telemetry.component';
import Controller from '../controller/controller.component';
import StackChild from '../stack-child/stack-child.component';

const GcsCommandCenter = () => {
    return (
        <Stack>
            <StackChild Component={GcsMap} position='relative' />
            <StackChild Component={Telemetry} position='absolute' right={15} top={15} />
            <StackChild Component={Controller}/>
        </Stack>
    )
};

export default GcsCommandCenter;
