import { AppRegistry } from 'react-native';
import App from './src/App';

process.nextTick = setImmediate

AppRegistry.registerComponent('Omakase', () => App);
