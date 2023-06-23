import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';

import {Icon} from '@rneui/themed';

const CustomerService = () => {
  return (
    <View className="bg-white shadow-lg mb-4 mx-4 rounded">
      <Text className="text-black font-semibold p-2 text-lg">
        Customer Service
      </Text>
      <View>
        <View className="flex-row items-center justify-between mx-4">
          <View className="">
            <Image
              source={require('../assets/customer-service.png')}
              className="w-[50px] h-[50px]"
            />
          </View>
          <View className="'">
            <Text className="text-black text-lg">Water Utility Company</Text>
            <Text className="text-gray-500">
              Efficiency and excellence in customer service
            </Text>
          </View>
        </View>

        <View className="flex-row px-12 pt-8 pb-2 justify-between">
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.dawasa.go.tz')}>
            <Icon name="web" type="material" size={32} color="#3592de" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:waterutilty@example.com')}>
            <Icon name="email" type="material" size={32} color="#3592de" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:+255710010010`)}>
            <Icon name="call" size={32} color="#3592de" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomerService;
