import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class Display extends Component {
  mapIngredients() {
    return this.props.ingredients.ingredients.map(ingredient => {
      return <Text key={ingredient.id}>{ingredient.name}</Text>
    })
  }

  render() {
    console.log('display.js this.props', this.props);
    if (!this.props.ingredients.ingredients) {
      return <ActivityIndicator />
    }

    return(
      <View>
        <Text>ingredients:</Text>
        {this.mapIngredients()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps)(Display);
