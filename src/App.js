import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Header from './components/Header'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header />
      </View>
    </Provider>
  );
};

export default App;
