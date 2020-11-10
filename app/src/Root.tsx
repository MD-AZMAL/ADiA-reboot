import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Dropdown, Progress } from 'rsuite';
import { connect } from 'react-redux';

import TestDisplay  from './components/TestDisplay';
import { testToggleValue } from './redux/test/test.actions';
import { CustomButton } from './components/CustomButton';
import Map from './components/Map';
import flightLib from '../flightLib';

import './app.global.scss';

const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10,
};

const Root = ({setTestToggleValue} :{setTestToggleValue?: any}) => (
  <div>
    <h1>ADiA</h1>
    <CustomButton onClick={() => {
      setTestToggleValue(5)
    }}></CustomButton>
    <Dropdown title="Default">
      <Dropdown.Item>New File</Dropdown.Item>
      <Dropdown.Item>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item>Download As...</Dropdown.Item>
      <Dropdown.Item>Export PDF</Dropdown.Item>
      <Dropdown.Item>Export HTML</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>About</Dropdown.Item>
    </Dropdown>
    <div>
      <Progress.Circle style={style} percent={30} strokeColor="#ffc107" />
    </div>
    <TestDisplay />
    <div>
      {flightLib.initCheck(1,10)}
    </div>
    <div>
      <Map />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setTestToggleValue: (val) => dispatch(testToggleValue(val))
});

export default hot(connect(null,mapDispatchToProps)(Root));
