import {Text, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';

const CustomDrawer = () => {
  const username = useSelector(state => state.userData.firstName);
  const meterNumber = useSelector(state => state.userData.meterNumber);
  const phoneNumber = useSelector(state => state.userData.phoneNumber);
  const region = useSelector(state => state.userData.region);
  const district = useSelector(state => state.userData.district);

  const [userData, setUserData] = useState({});

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <View className="flex-1">
      <View className="bg-[#5a8fbb] px-4 py-4">
        <View className="bg-[#5085b1] rounded-full w-20 h-20 items-center justify-center">
          <Text className="text-white font-bold text-4xl">
            {username.substring(0, 1)}
          </Text>
        </View>
        <Text className="text=[#fcffff] font-bold text-2xl pt-4">
          {username}
        </Text>
        <Text className=" pt-1 text-lg text-gray-300">{phoneNumber}</Text>
      </View>
      <View className="px-3 pt-4 space-y-4">
        <View className="flex-row space-x-4 items-center ">
          <Icon
            name="speedometer"
            type="material-community"
            color="#8b9197"
            size={32}
          />
          <View>
            <Text className="text-[#636363] text-lg font-semibold">
              Meter Number
            </Text>
            <Text className="text-[#8b9197] text-lg">{meterNumber}</Text>
          </View>
        </View>

        <View className="flex-row space-x-4 items-center ">
          <Icon
            name="map-marker"
            type="material-community"
            color="#8b9197"
            size={32}
          />
          <View>
            <Text className="text-[#636363] text-lg font-semibold">
              Physical Address
            </Text>
            <Text className="text-[#8b9197] text-lg">
              {`${region},${district}`}
            </Text>
          </View>
        </View>
      </View>
      <View className="p-4 absolute bottom-0 flex-row items-center space-x-4">
        <Icon name="logout" size={32} color="#3da2f5" />
        <TouchableOpacity onPress={handleLogout}>
          <Text className="text-lg text-black font-bold">Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

// import { useEffect, useState } from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';

// import {Icon} from '@rneui/themed';
// import {useDispatch, useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SecureStore from 'expo-secure-store';

// import {setLogin} from '../redux/slice/login';
// import { deleteToken } from '../redux/slice/tokenSlice';
// import { deleteUserData } from '../redux/slice/userDataSlice';

// const CustomDrawer = props => {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({})

//   const handleLogout = async () => {
//     await SecureStore.deleteItemAsync('auth-token')
//     console.log('token deleted');
//     await AsyncStorage.removeItem('userData')
//     console.log('deleted user data');
//     dispatch(setLogin(false))
//   };

//   const getUserData = async () => {
//     await AsyncStorage.getItem('userData')
//     .then(val => {
//       const user = JSON.parse(val)
//       setUser(user)
//       console.log(user);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }
//   useEffect(() => {
//     getUserData()
//   }, [])

// export default CustomDrawer;
