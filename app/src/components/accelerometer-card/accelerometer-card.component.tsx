import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAccel } from '../../redux/telemertry/telemetry.selectors';
import TelemetryCard from '../telemetry-card/telemetry-card.component';

const AccelorometerCard = ({accel} :any) => {
    return (
        <TelemetryCard icon='adn' name='Accel' labelX='X' labelY='Y' labelZ='Z' valX={accel.X} valY={accel.Y} valZ={accel.Z}/>
    )
}

const mapStateToProps = createStructuredSelector({
    accel: selectAccel
});

export default connect(mapStateToProps)(AccelorometerCard);
