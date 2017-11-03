import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = () => {

  const { imageStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={require('../img/OmakaseWhite.png')} />
    </View>
  );
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
    backgroundColor: '#800000',
    marginTop: 20
  }
};

export default Header;
