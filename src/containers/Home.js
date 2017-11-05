import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToCamera, fetchIngredients } from '../actions';


class Home extends Component {
  render() {
    const {
      buttonStyle,
      cameraImageStyle,
      centerImageStyle,
      headerImageStyle,
      viewStyle
    } = styles
    return (
      <View style={viewStyle}>
        <Image style={headerImageStyle} source={require('../img/OmakaseWhite.png')} />
        <Image style={centerImageStyle} source={require('../img/cook.jpg')} />
        <TouchableHighlight onPress={() => this.props.goToCamera()} style={buttonStyle}>
          <Image style={cameraImageStyle} source={require('../img/camera.png')} />
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = {
  headerImageStyle: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  centerImageStyle: {
    width: 420,
    height: 550,
    resizeMode: 'contain',
    marginLeft: -3
  },
  viewStyle: {
    backgroundColor: '#800000',
    marginTop: 20
  },
  buttonStyle: {
    backgroundColor: '#800000'
  },
  cameraImageStyle: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ goToCamera: goToCamera, fetchIngredients: fetchIngredients }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
