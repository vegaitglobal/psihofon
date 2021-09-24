import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {RootNavigator} from './src/navigation/RootNavigator';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
