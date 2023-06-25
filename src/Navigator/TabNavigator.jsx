import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

const TabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View className="flex-1">
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Readings" component={AnalyticsScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
