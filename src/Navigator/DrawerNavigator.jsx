import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <View className="flex-1">
      <Drawer.Navigator drawerContent={props => <CustomDrawer props={props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
