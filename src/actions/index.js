import { Actions } from 'react-native-router-flux';
import { CLARIFAI_KEY, MASH_KEY } from 'react-native-dotenv';
import Clarifai from 'clarifai';
import axios from 'axios'

const ReadImageData = require('NativeModules').ReadImageData;

const clarifaiCall = new Clarifai.App({
  apiKey: CLARIFAI_KEY
});

export function goToCamera() {
  Actions.appCamera();
  return {
    type: 'SCREEN_CHANGE',
    payload: 'camera'
  }
}

export function fetchIngredients(data) {
  Actions.recipes()
  function filterByValue(obj) {
    return obj.value > 0.80
  }
  return (dispatch) => {
    ReadImageData.readImage(data.path, (imageBase64) => {
      clarifaiCall.models.predict("bd367be194cf45149e75f01d59f77ba7", {base64: imageBase64})
        .then(response => {
          dispatch({
            type: 'INGREDIENTS',
            payload: response.outputs[0].data.concepts.filter(filterByValue) })
        })
    })
  }
}



export function fetchRecipes(ingredients) {
  if (ingredients !== undefined) {
    return (dispatch) => {
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/menuItems/search?maxCalories=5000&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=0&minCarbs=0&minFat=0&minProtein=0&number=10&offset=0&query=${ingredients}`, {
      headers: {
        "X-Mashape-Key": MASH_KEY,
        "Accept": "application/json"
      }
    })
      .then(response => {
        dispatch({
          type: 'RECIPES',
          payload: response.data.menuItems
        })
      })
      .catch(err => console.log(err))
    }
  }
  return {
    type: '',
    payload: ''
  }
}
