import { Actions } from 'react-native-router-flux';
import { CLARIFAI_KEY } from 'react-native-dotenv';
import Clarifai from 'clarifai';

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
  Actions.display()
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
