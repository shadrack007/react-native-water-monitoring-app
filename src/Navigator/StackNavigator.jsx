import {useEffect, useState} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MeterNumberScreen from '../screens/MeterNumberScreen';
import DrawerNavigator from './DrawerNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import {
  setMeterNumber,
  setFirstName,
  setPhoneNumber,
  setRegion,
  setDistrict,
} from '../redux/slice/userDataSlice';
import {setLogin} from '../redux/slice/login';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.login.value);

  const getUserData = async () => {
    await AsyncStorage.getItem('userData')
      .then(data => {
        if (data) {
          const userDataObject = JSON.parse(data);
          dispatch(setFirstName(userDataObject.customer.first_name));
          dispatch(setMeterNumber(userDataObject.meter_number));
          dispatch(setPhoneNumber(userDataObject.customer.meter_number));
          dispatch(setRegion(userDataObject.customer.region));
          dispatch(setDistrict(userDataObject.customer.district));
          dispatch(setLogin(true));
        } else {
          console.log('no data found');
          dispatch(setLogin(false));
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        SplashScreen.hide();
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View className="flex-1">
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Notification" component={NotificationScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MeterNumber"
              component={MeterNumberScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </View>
  );
};
export default StackNavigator;
