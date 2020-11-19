import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGyro } from '../../redux/telemertry/telemetry.selectors';
import TelemetryCard from '../telemetry-card/telemetry-card.component';

const GyroscopeCard = ({gyro} :any) => {
    return (
        <TelemetryCard icon='ge' name='Gyro' labelX='X' labelY='Y' labelZ='Z' valX={gyro.X} valY={gyro.Y} valZ={gyro.Z}/>
    )
}

const mapStateToProps = createStructuredSelector({
    gyro: selectGyro
});

export default connect(mapStateToProps)(GyroscopeCard);
