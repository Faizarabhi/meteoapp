import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text
} from "react-native";
import { Cloud } from '../constants';
import { CustomButton, CustumMainCard, CustomCard, CustomMainCard } from "../components";
const Home = () => {
  // API State
  const [forecast, setForecast] = useState([]);
  // last data
  const [meteo, setMeteo] = useState([])

  useEffect(() => {
    const API_KEY = 'b045804ab93431828b3e101e2be26dc1';
    const city = 'Safi,MA';
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setForecast(data.list))
      .catch((error) => console.error(error));
    // Cloud.map((data)=>{console.log(data.id,'img:',data.img)})
    Cloud.forEach((Cloudimg, index) => {
      let dataMeteo = {
        date: '',
        desc: '',
        temp: '',
        icon: '',
        wind: {
          speed: '',
          deg: '',
          gust: '',
        }
      };

      forecast.forEach((item, id) => {
        if (item.weather[0].icon === Cloudimg.id) {
          dataMeteo.icon = Cloudimg.img
          dataMeteo.desc =  item.weather[0].description
          dataMeteo.temp =  item.main.temp
          dataMeteo.date = item.dt_txt

        }
        // console.log(item.);
      })
      console.log(dataMeteo)
      setMeteo()
    })
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomMainCard/> */}
      <View style={styles.row}>

        <FlatList
          data={Cloud}
          renderItem={({ item }) => <>
            <CustomMainCard name={item.name} />
          </>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.row}>
        <FlatList
          data={Cloud}
          renderItem={({ item }) => <>
            <CustomCard img={item.img} name={item.name} />
          </>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <CustomButton screen="Login" sujet='Log Out' />

    </SafeAreaView>
  );
};

export default Home;
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#84d4fc",

  },
  row: {
    flex: 2,
    borderBottomColor: 'red',
    borderWidth: 4,
  }
});