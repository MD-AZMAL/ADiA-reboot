import React from 'react';
import { Icon, Grid, Row, Col, Panel } from 'rsuite';

const TelemetryCard = ({
  icon,
  name,
  labelX,
  labelY,
  labelZ,
  labelZ1,
  labelZ2,
  valX,
  valY,
  valZ,
  valZ1,
  valZ2,
}: any) => {
  return (
    <Panel
      bordered
      bodyFill
      style={{ width: '270px', padding: '0.3rem', backgroundColor: 'white' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          width: '270px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Icon icon={icon} size="2x" />
          <span>{name}</span>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <span>{valX}</span>
            <span>{valY}</span>
            <span>{valZ}</span>
            {valZ1 ? <span>{valZ1}</span> : null}
            {valZ2 ? <span>{valZ2}</span> : null}
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <span>{labelX}</span>
            <span>{labelY}</span>
            <span>{labelZ}</span>
            {labelZ1 ? <span>{labelZ1}</span> : null}
            {labelZ2 ? <span>{labelZ2}</span> : null}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default TelemetryCard;


  /* <Grid fluid style={{backgroundColor:'green'}}>
  <Row>
    <Col xs={8}>{ labelX }</Col>
    <Col xs={8}>{ labelY }</Col>
    <Col xs={8}>{ labelZ }</Col>

  </Row>
  <Row>
    <Col xs={8}>{ valX }</Col>
    <Col xs={8}>{ valY }</Col>
    <Col xs={8}>{ valZ }</Col>

  </Row>
</Grid> */

