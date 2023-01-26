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
   
    const API_URL = `http://192.168.8.68:5000/api/Apiweather/Apiweather`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>setMeteo(data) )
      .catch((error) => console.error(error));
      console.log(meteo)
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomMainCard/> */}
{meteo? <>
      <View style={styles.row}>
      <FlatList
          data={Cloud}
          // numColumns={2}
          renderItem={({ item }) => <>
            <CustomMainCard data={item} />
          </>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
       <View style={styles.row}>
       <FlatList
          data={meteo}
          // numColumns={2}
          renderItem={({ item }) => <>
            <CustomCard data={item} />
          </>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      </>
: <Text>Load...</Text>}
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
    justifyContent: 'flex-end'
  }
});