import {Text, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {Icon} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setLogin} from '../redux/slice/login';

const CustomDrawer = () => {
  const username = useSelector(state => state.userData.firstName);
  const meterNumber = useSelector(state => state.userData.meterNumber);
  const phoneNumber = useSelector(state => state.userData.phoneNumber);
  const region = useSelector(state => state.userData.region);
  const district = useSelector(state => state.userData.district);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    console.log('uservdata removed');
    dispatch(setLogin(false));
    console.log('to login page');
  };

  return (
    <View className="flex-1">
      <View className="bg-[#5a8fbb] px-4 py-4">
        <View className="bg-[#5085b1] rounded-full w-20 h-20 items-center justify-center">
          <Text className="text-white font-bold text-4xl">
            {username.substring(0, 1)}
          </Text>
        </View>
        <Text className="text-[#fcffff] font-semibold text-2xl pt-4">
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
          <Text className="text-lg text-gray-600 font-bold">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
