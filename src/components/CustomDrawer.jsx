import {View, Text, TouchableOpacity} from 'react-native';

import {Icon} from '@rneui/themed';

const CustomDrawer = props => {
  console.log(props);
  return (
    <View className="flex-1">
      <View className="bg-[#5a8fbb] px-4 py-4">
        <View className="bg-[#5085b1] rounded-full w-20 h-20 items-center justify-center">
          <Text className="text-white font-bold text-4xl">D</Text>
        </View>
        <Text className="text=[#fcffff] font-bold text-2xl pt-4">Drack007</Text>
        <Text className=" pt-1 text-lg text-gray-300">+255743661350</Text>
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
            <Text className="text-[#8b9197] text-lg">1234567890</Text>
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
              Dar-es-salaam, Kinondoni
            </Text>
          </View>
        </View>
      </View>
      <View className="p-4 absolute bottom-0 flex-row items-center space-x-4">
        <Icon name="logout" size={32} color="#8b9197" />
        <TouchableOpacity>
          <Text className="text-lg text-black font-bold">Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
