import {View, Text, ScrollView} from 'react-native';

import * as Animatable from 'react-native-animatable';

import CustomerService from '../components/CustomerService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const HomeScreen = () => {
  const [waterVolume, setWaterVolume] = useState(0);
  const meterNumber = useSelector(state => state.userData.meterNumber);
  const socketUrl = `ws://192.168.33.207:8000/${meterNumber}/`;
  let ws = new WebSocket(socketUrl);

  ws.onopen = () => {
    console.log('connected');
  };
  ws.onerror = e => {
    console.log('error');
  };

  ws.onmessage = e => {
    const data = JSON.parse(e.data);
    setWaterVolume(data.volume);
  };

  ws.onclose = e => {
    console.log('connection closed');
  };

  return (
    <Animatable.View animation="slideInDown" delay={1000} className="flex-1">
      <View className="flex-1 justify-center items-center m-3 shadow-lg">
        <Animatable.View
          animation="pulse"
          iterationDelay={4000}
          iterationCount="infinite"
          className="bg-gray-300 w-[250px] h-[250px] rounded-full justify-center items-center">
          <Text className="text-gray-700 font-bold text-4xl">
            {waterVolume.toFixed(2)} L
          </Text>
        </Animatable.View>
      </View>
      <Animatable.View animation="fadeInUp" delay={2000}>
        <CustomerService />
      </Animatable.View>
    </Animatable.View>
  );
};

export default HomeScreen;
