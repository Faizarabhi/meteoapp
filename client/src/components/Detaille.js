import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
const Detaille = () => {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.det}>
          <Text>8h</Text>
          <Image source={require('../../assets/rain.png')} style={styles.img}/>
          <Text>13 °C</Text>
        </View>
        

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
    margin: 12
    
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