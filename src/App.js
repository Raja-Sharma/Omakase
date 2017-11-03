import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import RouterComponent from './Router';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
