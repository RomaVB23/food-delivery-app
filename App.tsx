import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen'

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/reducers/confugureStore';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
