import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';


const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  const Root = require('./src/Root').default;
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
});
