import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Home from './containers/Home';
import AppCamera from './containers/AppCamera';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene title="Welcome" key="home" component={Home} initial />
        <Scene title="Camera" key="appCamera" component={AppCamera} />
      </Stack>
    </Router>
  )
}

export default RouterComponent;
