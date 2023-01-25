import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View
} from "react-native";
import { Cloud } from '../constants';
import { CustomButton, CustumMainCard, CustomCard, CustomMainCard } from "../components";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomMainCard/> */}
      <View style={styles.row}>
        <FlatList
          data={Cloud}
          renderItem={({ item }) => <>
            <CustomMainCard name={item.name}/>
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