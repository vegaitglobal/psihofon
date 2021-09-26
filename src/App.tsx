import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {RootNavigator} from './navigation/RootNavigator';
import {persistor, store, useAppDispatch} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {RootState} from './reducers/rootReducer';
import {
  setFirstUsageDate,
  toggleIsFirstUsage,
} from './reducers/settingsReducer';
import { getCrisisExercises } from './reducers/crisisExcercisesReducer';
import { getSelfEmpowermentExercises } from './reducers/selfEmpowermentExercises';
import { getMentalStates } from './reducers/mentalStatesReducer';
import { getQuestionnaire } from './reducers/questionnairesReducer';
import { getOrganizations } from './reducers/organizationsSlice';

enableScreens(false);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
