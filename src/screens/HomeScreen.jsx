import {View, Text, ScrollView} from 'react-native';

import * as Animatable from 'react-native-animatable';

import CustomerService from '../components/CustomerService';

const HomeScreen = () => {
  const today = new Date();

  return (
    <Animatable.View animation="slideInDown" delay={1000} className="flex-1">
      <Animatable.Text
        animation="slideInRight"
        className="text-black pt-8 font-semibold text-lg px-3">
        {today.toDateString()} Usage
      </Animatable.Text>
      <View className="flex-1 justify-center items-center m-3 shadow-lg">
        <Animatable.View
          animation="pulse"
          iterationDelay={4000}
          iterationCount="infinite"
          className="bg-gray-300 w-[250px] h-[250px] rounded-full justify-center items-center">
          <Text className="text-gray-700 font-bold text-4xl">123.4 L</Text>
        </Animatable.View>
      </View>
      <Animatable.View animation="fadeInUp" delay={2000}>
        <CustomerService />
      </Animatable.View>
    </Animatable.View>
  );
};

export default HomeScreen;
