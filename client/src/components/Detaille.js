import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
const Detaille = ({data}) => {
  let img = data.data.img
 
  // console.log(img,'this data')
  return (
      <SafeAreaView style={styles.container}>
        {data.length != 0?
        <View style={styles.det}>
          <Text>{data.data.time}h</Text>
          <Text>{data.data.date}</Text>
          {/* <Image source={data.data.img} style={styles.img}/> */}
          {/* <Image source={require('../../assets/Clouds.png')} style={styles.img}/> */}
          <Text>{data.data.temp}</Text>
        </View> :<Text style={styles.det}>Loading ...</Text>}
        

    </SafeAreaView>
  );
};

export default Detaille;
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    alignSelf: "flex-start",
    backgroundColor: "#0a9dfb",
    margin: 6,
    shadowColor: "#000",
shadowOffset: {
	width: 8,
	height: 4,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    
  },
  det:{
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 20,
    height:20,
    resizeMode: 'contain'
  }
});