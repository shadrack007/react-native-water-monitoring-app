import {View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import {Badge, Icon, withBadge} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

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
              <BadgedIcon
                type="ionicon"
                size={32}
                name="notifications-outline"
              />
            </TouchableOpacity>
          ),
          title: 'Smart Water Meter ',
        }}>
        {/* drawerContent={props => <CustomDrawer props={props} />} */}
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
