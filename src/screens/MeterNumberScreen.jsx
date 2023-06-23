import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import {Formik} from 'formik';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {validate} from '../utils/validate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
  setDistrict,
  setFirstName,
  setMeterNumber,
  setPhoneNumber,
  setRegion,
} from '../redux/slice/userDataSlice';
import {setLogin} from '../redux/slice/login';

const MeterNumberScreen = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const baseUrl = 'http://192.168.33.207:8000/api/v1/meter-detail/';

  return (
    <Animatable.View
      animation="slideInUp"
      delay={200}
      className="flex-1 justify-center items-center">
      <Text className="text-gray-700 font-bold text-4xl py-4">
        Smart Water Meter
      </Text>
      <View className="w-full px-8">
        <Formik
          initialValues={{
            meterNumber: '',
          }}
          onSubmit={async values => {
            const meterNumber = values.meterNumber;
            setIsLoading(true);
            await axios
              .post(baseUrl, {
                meter_number: meterNumber,
              })
              .then(async res => {
                const data = res.data;
                dispatch(setMeterNumber(data.meter_number));
                dispatch(setFirstName(data.customer.first_name));
                dispatch(setPhoneNumber(data.customer.phone_number));
                dispatch(setRegion(data.customer.region));
                dispatch(setDistrict(data.customer.district));
                await AsyncStorage.setItem('userData', JSON.stringify(data));
                dispatch(setLogin(true));
              })
              .then(setError(false))
              .then(setIsLoading(false))
              .catch(err => {
                console.log(err);
                setIsLoading(false);
                setError(true);
              });
          }}
          validate={validate}>
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            setFieldTouched,
            errors,
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange('meterNumber')}
                value={values.meterNumber}
                onBlur={() => setFieldTouched('meterNumber')}
                placeholder="Enter your meter number"
                placeholderTextColor="gray"
                keyboardType="numeric"
                className="border border-gray-500 focus:border-blue-800 text-black text-lg px-4 rounded "
              />
              {touched.meterNumber && errors.meterNumber && (
                <Text className="text-red-500 text-lg">
                  {errors.meterNumber}
                </Text>
              )}

              {error && (
                <Text className="text-red-500 text-lg pt-3">
                  Meter Number not found
                </Text>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-blue-500 items-center py-3 mt-4 rounded">
                <Text className="text-white font-semibold text-lg">
                  Start Monitoring
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        {isLoading && <ActivityIndicator size="large" color="#2887e0" />}
      </View>
    </Animatable.View>
  );
};

export default MeterNumberScreen;
