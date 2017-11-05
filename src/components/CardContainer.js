import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';
import Card from './Card';

const CardContainer = (props) => {
  const { textStyle, thumbnailStyle, viewStyle } = styles

  return (
    <ScrollView style={viewStyle}>
      {props.recipes.map(recipe => {
        return (
          <Card key={recipe.id}>
            <TouchableOpacity>
              <View>
                <Image style={thumbnailStyle} key={recipe.id} source={{ uri: recipe.image }} />
                <Text style={textStyle} >{recipe.title}</Text>
              </View>
            </TouchableOpacity>
          </Card>
        )
      })}
    </ScrollView>
  )
}

export default CardContainer;

const styles = {
  thumbnailStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  viewStyle: {
    backgroundColor: '#fff'
  }
}
