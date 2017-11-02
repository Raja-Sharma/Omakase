import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Test from './containers/Test';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>
          Omakase
        </Text>
        <Test />
      </View>
    </Provider>
  );
};

export default App;
