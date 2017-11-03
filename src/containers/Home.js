import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToCamera, fetchIngredients } from '../actions';


class Home extends Component {
  render() {
    const { buttonStyle, buttonTextStyling, imageStyle, viewStyle } = styles
    console.log('Home.js this.props', this.props)
    return (
      <View style={viewStyle}>
        <Image style={imageStyle} source={require('../img/OmakaseWhite.png')} />
        <TouchableHighlight onPress={() => this.props.goToCamera()} style={buttonStyle}>
          <Text style={buttonTextStyling} >Camera</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.fetchIngredients()} style={buttonStyle}>
          <Text style={buttonTextStyling} >fetch</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = {
  imageStyle: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 0
  },
  viewStyle: {
    backgroundColor: '#800000'
  },
  buttonStyle: {
    backgroundColor: '#ADD8E6'
  },
  buttonTextStyling: {
    fontSize: 50,
    textAlign: 'center',
    color: '#fff'
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ goToCamera: goToCamera, fetchIngredients: fetchIngredients }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
