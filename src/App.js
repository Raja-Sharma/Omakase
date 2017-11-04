import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import RouterComponent from './Router';
import thunk from 'redux-thunk'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const App = () => {
  return (
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
