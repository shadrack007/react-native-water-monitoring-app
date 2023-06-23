import {Text, View} from 'react-native';
import {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NotificationScreen from './screens/NotificationScreen';
import MeterNumberScreen from './screens/MeterNumberScreen';
import DrawerNavigator from './Navigator/DrawerNavigator';
import {
  setMeterNumber,
  setFirstName,
  setPhoneNumber,
  setRegion,
  setDistrict,
} from './redux/slice/userDataSlice';
import {setLogin} from './redux/slice/login';

const Main = () => {
  const isLoggedIn = useSelector(state => state.login.value);
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const getUserData = async () => {
    await AsyncStorage.getItem('userData')
      .then(data => {
        if (data) {
          dispatch(setLogin(true));
          const userDataObject = JSON.parse(data);
          dispatch(setFirstName(userDataObject.customer.first_name));
          dispatch(setMeterNumber(userDataObject.meter_number));
          dispatch(setPhoneNumber(userDataObject.customer.phone_number));
          dispatch(setRegion(userDataObject.customer.region));
          dispatch(setDistrict(userDataObject.customer.district));
        } else {
          console.log('no data found');
          dispatch(setLogin(false));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View className="flex-1">
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Main"
                component={DrawerNavigator}
              />
              <Stack.Screen
                name="Notification"
                component={NotificationScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="MeterNumber"
                component={MeterNumberScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Main;
