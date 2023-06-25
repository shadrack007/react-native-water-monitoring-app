import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import {useSelector} from 'react-redux';
import axios from 'axios';
import {BarChart} from 'react-native-chart-kit';

import {chartConfig} from '../utils/chartConfig';

const AnalyticsScreen = () => {
  const {width, height} = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const meterNumber = useSelector(state => state.userData.meterNumber);
  const baseUrl = 'http://192.168.97.207:8000/api/v1/meter-readings/';

  const fetchReadings = async () => {
    await axios
      .post(baseUrl, {
        meter_number: meterNumber,
      })
      .then(res => {
        setIsLoading(false);
        const resData = res.data;
        setLabels(
          resData.map(item =>
            new Date(item.collection_date).toLocaleDateString(),
          ),
        );
        setData(resData.map(item => item.volume_used));
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchReadings();
  }, []);

  const graphData = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };

  return (
    <View className="flex-1 ">
      <ScrollView horizontal>
        <BarChart
          data={graphData}
          height={height}
          width={width + 200}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          yAxisSuffix="L"
        />
      </ScrollView>
      {isLoading && <ActivityIndicator size="large" color="#03a1fc" />}
    </View>
  );
};

export default AnalyticsScreen;
