import 'react-native-gesture-handler';
import {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {store} from './src/redux/store';
import Main from './src/Main';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <SafeAreaView className="flex-1">
      <Provider store={store}>
        <StatusBar backgroundColor="#5a8fbb" />
        <GestureHandlerRootView className="flex-1">
          <Main />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
