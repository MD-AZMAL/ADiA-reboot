import React from 'react'
import { Icon, Grid, Row, Col, Panel } from 'rsuite';

const TelemetryCard = ({icon, name, labelX, labelY, labelZ, labelZ1, valX, valY, valZ, valZ1}: any) => {
  return (
    <Panel bordered bodyFill style={{width: '200px', padding:'0.3rem', backgroundColor:'white'}}>
      <div style={{display: 'flex', alignItems: 'stretch', justifyContent:'flex-start', width: '200px'}}>

<div style={{ textAlign:'center'}}>
  <Icon icon={ icon } size='2x'/>
  <span>{ name }</span>
</div>
{/* <Grid fluid style={{backgroundColor:'green'}}>
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
</Grid> */}

<div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
<div style={{display: 'flex', alignItems:'center', justifyContent:'space-evenly', textAlign:'center'}}>
    <span>{valX}</span>
    <span>{valY}</span>
    <span>{valZ}</span>
    {valZ1 ? <span>{valZ1}</span> : null}
  </div>
  <div style={{display: 'flex', alignItems:'center', justifyContent:'space-evenly', textAlign:'center'}}>
    <span>{labelX}</span>
    <span>{labelY}</span>
    <span>{labelZ}</span>
    {labelZ1 ? <span>{labelZ1}</span> : null}
  </div>

</div>


</div>
    </Panel>
  )
}

export default TelemetryCard;
