import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Dropdown, Progress } from 'rsuite';
import { CustomButton } from './components/CustomButton';

import './app.global.scss';

const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};

const Root = () => (
  <div>
    <h1>ADiA</h1>
    <CustomButton></CustomButton>
    <Dropdown title="Default">
      <Dropdown.Item>New File</Dropdown.Item>
      <Dropdown.Item>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item>Download As...</Dropdown.Item>
      <Dropdown.Item>Export PDF</Dropdown.Item>
      <Dropdown.Item>Export HTML</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>About</Dropdown.Item>
    </Dropdown>
    <div >
      <Progress.Circle style={style} percent={30} strokeColor="#ffc107" />
    </div>
  </div>
);

export default hot(Root);
