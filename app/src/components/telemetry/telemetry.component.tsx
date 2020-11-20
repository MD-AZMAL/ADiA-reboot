import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AccelorometerCard from '../accelerometer-card/accelerometer-card.component';
import GyroscopeCard from '../gyroscope-card/gyroscope-card.component';

import {
  selectFCP,
  selectIsSubscribedToIMU,
} from '../../redux/fc/fc.selectors';
import {
  setAccelerometer,
  setGyroscope,
} from '../../redux/telemertry/telemetry.actions';

const Telemetry = ({
  FCP,
  setAccelerometer,
  setGyroscope,
  isSubscribedToIMU,
}: any) => {
  const [telemetryInterval, setTelemetryInterval] = useState<NodeJS.Timeout>(
    (0 as unknown) as NodeJS.Timeout
  );

  useEffect(() => {
    const getIMU = () => {
      if (isSubscribedToIMU) {
        setAccelerometer(FCP);
        setGyroscope(FCP);
      }
    };

    if (isSubscribedToIMU) {
      setTelemetryInterval(setInterval(getIMU, 500));
    } else {
      clearInterval(telemetryInterval);
    }

    return () => {
      clearInterval(telemetryInterval);
    };
  }, [isSubscribedToIMU]);

  return (
    // style={{ position: 'absolute', right: 15, top: 15 }}
    <div > 
      <div style={{marginBottom: '0.5rem'}}>
        <AccelorometerCard />
      </div>
      <div>
        <GyroscopeCard />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSubscribedToIMU: selectIsSubscribedToIMU,
  FCP: selectFCP,
});

const mapDispatchToProps = (dispatch: any) => ({
  setAccelerometer: (FCP: any) => dispatch(setAccelerometer(FCP)),
  setGyroscope: (FCP: any) => dispatch(setGyroscope(FCP)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Telemetry);
