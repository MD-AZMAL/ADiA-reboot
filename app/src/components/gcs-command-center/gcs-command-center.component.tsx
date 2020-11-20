import React from 'react'
import GcsMap from '../gcs-map/gcs-map.component'
import Stack from '../stack/stack.component';
import Telemetry from '../telemetry/telemetry.component';
import StackChild from '../stack-child/stack-child.component';

const GcsCommandCenter = () => {
    return (
        <Stack>
            <StackChild Component={GcsMap} position='relative' />
            <StackChild Component={Telemetry} right={15} top={15} />
        </Stack>
    )
}

export default GcsCommandCenter;
