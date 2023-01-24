import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import {  CustomButton} from "../components";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <CustomButton  screen="Login" sujet='Log Out' />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});