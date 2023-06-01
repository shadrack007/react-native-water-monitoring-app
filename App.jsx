import 'react-native-gesture-handler';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import StackNavigator from './src/Navigator/StackNavigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="#5a8fbb" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
