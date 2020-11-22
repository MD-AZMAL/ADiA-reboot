import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TelemetryCard from '../telemetry-card/telemetry-card.component';
import { selectRc } from '../../redux/fc/fc.selectors';

const RcCard = ({ Rc }: any) => {
  return (
    <TelemetryCard
      icon="dot-circle-o"
      name="RC"
      labelX="rl"
      labelY="pt"
      labelZ="yw"
      labelZ1="tr"
      valX={Rc.roll}
      valY={Rc.pitch}
      valZ={Rc.yaw}
      valZ1={Rc.throttle}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  Rc: selectRc,
});

export default connect(mapStateToProps)(RcCard);