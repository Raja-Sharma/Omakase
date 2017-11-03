import { Actions } from 'react-native-router-flux';
import { CLARIFAI_KEY } from 'react-native-dotenv';
import Clarifai from 'clarifai';

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

export function fetchIngredients() {
  //working Clarifai api call with URL
  clarifaiCall.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://samples.clarifai.com/food.jpg")
  .then(response => console.log(response.outputs[0].data.concepts))
  .catch(err => console.log(err))
}
