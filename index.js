// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './app/index';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "app/index.js";
import { BaseSetting } from "@config";
//Another New Comment Added on July 4 ad 1:00 PM
AppRegistry.registerComponent('hour', () => App);