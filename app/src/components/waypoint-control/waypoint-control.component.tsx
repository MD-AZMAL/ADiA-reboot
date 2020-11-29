import React from 'react';
import { Button } from 'rsuite';

const WaypointControl = () => {
  const handleWayPointToggle = (event: any) => {
    console.log('Logg');
  };

  return (
    <Button
      appearance="primary"
      color={false ? 'red' : 'blue'}
      onClick={handleWayPointToggle}
    >
      {false ? 'Clear waypoint' : 'Add waypoint'}
    </Button>
  );
};

export default WaypointControl;
