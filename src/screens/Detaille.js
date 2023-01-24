import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import {  CustomButton} from "../components";
const Detaille = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detaille</Text>
      <CustomButton  screen="Login" sujet='Log Out' />
    </SafeAreaView>
  );
};

export default Detaille;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});