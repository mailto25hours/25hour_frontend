import React from 'react';
import {store, persistor} from 'app/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigation';
import { LogBox } from 'react-native';
// console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs() 
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
