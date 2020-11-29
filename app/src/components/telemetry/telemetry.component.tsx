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
import RcCard from '../rc-card/rc-card.component';
import Compass from '../compass/compass.component';

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
      setTelemetryInterval(setInterval(getIMU, 100));
    } else {
      clearInterval(telemetryInterval);
    }

    return () => {
      clearInterval(telemetryInterval);
    };
  }, [isSubscribedToIMU]);

  // const keyPressEvents = {
  //   w: false,
  //   a: false,
  //   s: false,
  //   d: false,
  //   q: false,
  //   e: false,
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', (event) => {
  //     switch(event.key.toLowerCase()) {
  //       case 'w': keyPressEvents.w = true; break;
  //       case 'a': keyPressEvents.a = true; break;
  //       case 's': keyPressEvents.s = true; break;
  //       case 'd': keyPressEvents.d = true; break;
  //       case 'q': keyPressEvents.q = true; break;
  //       case 'e': keyPressEvents.e = true; break;
  //     }
  //     console.log(`W: ${keyPressEvents.w} A: ${keyPressEvents.a} S: ${keyPressEvents.s} D: ${keyPressEvents.d} Q: ${keyPressEvents.q} E: ${keyPressEvents.e}`);

  //   });

  //   document.addEventListener('keyup', (event) => {
  //     switch(event.key.toLowerCase()) {
  //       case 'w': keyPressEvents.w = false; break;
  //       case 'a': keyPressEvents.a = false; break;
  //       case 's': keyPressEvents.s = false; break;
  //       case 'd': keyPressEvents.d = false; break;
  //       case 'q': keyPressEvents.q = false; break;
  //       case 'e': keyPressEvents.e = false; break;
  //     }
  //     console.log(`W: ${keyPressEvents.w} A: ${keyPressEvents.a} S: ${keyPressEvents.s} D: ${keyPressEvents.d} Q: ${keyPressEvents.q} E: ${keyPressEvents.e}`);

  //   });
  // },[])

  return (
    // style={{ position: 'absolute', right: 15, top: 15 }}
    <div>
      <div style={{ marginBottom: '0.5rem' }}>
        <AccelorometerCard />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <GyroscopeCard />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <RcCard />
      </div>
      <div>
        <Compass />
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
