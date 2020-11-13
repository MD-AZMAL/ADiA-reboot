import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import './app.global.scss';

import { testToggleValue } from './redux/test/test.actions';
import GcsPage from './pages/gcs/gcs.page';

const Root = ({setTestToggleValue} :{setTestToggleValue?: any}) => (
  <div>
    <GcsPage />
  </div>
);

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => ({
  setTestToggleValue: (val: any) => dispatch(testToggleValue(val))
});

export default hot(connect(null,mapDispatchToProps)(Root));
