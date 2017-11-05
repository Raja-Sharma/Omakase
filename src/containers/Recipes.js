import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions'

class Recipes extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes === undefined) {
      let ingredientString = ''
      nextProps.ingredients.forEach(ingredient => {
        ingredientString += ingredient.name + ','
      })
      this.props.fetchRecipes(ingredientString)
    }
  }

  render() {
    if (!this.props.ingredients) {
      return <ActivityIndicator />
    }
    return(
      <View>
        <Text>recipes are in</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients.ingredients,
    recipes: state.recipes.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes: fetchRecipes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
