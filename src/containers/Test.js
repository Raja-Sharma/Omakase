import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const Test = ({test}) => {
  return (
    <View>
      <Text>{test[0]}</Text>
      <Text>{test[1]}</Text>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(Test);
