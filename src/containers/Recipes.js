import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions'

class Recipes extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (nextProps.recipes === undefined) {
      let ingredientString = ''
      nextProps.ingredients.forEach(ingredient => {
        ingredientString += ingredient.name + ','
      })
      this.props.fetchRecipes(ingredientString)
    }
  }

  render() {
    if (this.props.recipes === undefined) {
      return <ActivityIndicator />
    } else if (this.props.recipes.length === 0) {
      return <Text>no valid recipes</Text>
    }
    return(
      <View>
        <Text>{this.props.recipes[0].title}</Text>
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
