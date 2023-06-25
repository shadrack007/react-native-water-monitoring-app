import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

import axios from 'axios';
import {useSelector} from 'react-redux';

const NotificationScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bills, setBills] = useState([]);
  const meterNumber = useSelector(state => state.userData.meterNumber);
  const baseUrl = 'http://192.168.97.207:8000/api/v1/meter-bills/';

  const fetchBillsData = async () => {
    await axios
      .post(baseUrl, {
        meter_number: meterNumber,
      })
      .then(res => {
        setBills(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchBillsData();
  }, []);
  return (
    <View className="flex-1">
      <View>
        <FlatList
          data={bills}
          keyExtractor={items => items.id}
          renderItem={({item}) => (
            <View className="border border-gray-300 space-y-3 mx-2 py-3 rounded-md shadow-lg mt-2">
              <View className="flex-row justify-between px-4">
                <Text className="text-gray-600 font-semibold">
                  {new Date(item.issued_date).toLocaleDateString()}
                </Text>
                <View className="bg-red-500 rounded-full px-2 py-1">
                  <Text className="text-white font-semibold">
                    {item.status}
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between px-4">
                <Text className="text-gray-600 font-semibold">Amount</Text>
                <Text className="text-gray-600 font-semibold">
                  {item.amount} Tshs
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      {isLoading && (
        <View className="items-center justify-center">
          <ActivityIndicator size="large" color="#03a1fc" />
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;
