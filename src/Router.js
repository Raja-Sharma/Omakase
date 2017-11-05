import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Home from './containers/Home';
import AppCamera from './containers/AppCamera';
import Recipes from './containers/Recipes';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene hideNavBar={true} title="Back" key="home" component={Home} initial />
        <Scene title="Camera" key="appCamera" component={AppCamera} />
        <Scene title="Recipes" key="recipes" component={Recipes} />
      </Stack>
    </Router>
  )
}

export default RouterComponent;
