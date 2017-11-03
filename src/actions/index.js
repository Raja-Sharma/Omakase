import { Actions } from 'react-native-router-flux';
import { CLARIFAI_KEY } from 'react-native-dotenv';

export function goToCamera() {
  Actions.appCamera();
  return {
    type: 'SCREEN_CHANGE',
    payload: 'camera'
  }
}
