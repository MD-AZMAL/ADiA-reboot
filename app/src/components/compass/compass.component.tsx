import React from 'react'
import { Panel, Icon } from 'rsuite';

import compassNeedle from '../../static/svg/compass-needle-2.svg';
import compassOuter from '../../static/svg/compass-outer.svg';

const Compass = () => {
    return (
        <Panel bordered bodyFill style={{width: '120px', backgroundColor:'white', marginLeft: 'auto'}}>
        <div
          style={{
            margin: 'auto',
            position: 'relative',
            width: '50px',
            height: '100px',
            transform: 'scale(1.15)',
          }}
        >
          <Icon
            icon={compassNeedle}
            size="3x"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%) rotate(23deg)',
            }}
          />
          <Icon
            icon={compassOuter}
            size="5x"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          <p
            style={{
              position: 'absolute',
              bottom: 18,
              left: 45,
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}
          >
            23 &deg;
          </p>
        </div>
      </Panel>
    )
}

export default Compass;
