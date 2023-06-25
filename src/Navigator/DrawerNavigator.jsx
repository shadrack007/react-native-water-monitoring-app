import {View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Badge, Icon, withBadge} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

const BadgedIcon = withBadge(15)(Icon);

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer props={props} />}
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity
              className="pr-7"
              onPress={() => navigation.navigate('Notification')}>
              <Icon type="ionicon" size={32} name="notifications-outline" />
            </TouchableOpacity>
          ),
          title: 'Smart Water Meter ',
        }}>
        {/* drawerContent={props => <CustomDrawer props={props} />} */}
        <Drawer.Screen name="TopTab" component={TabNavigator} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
