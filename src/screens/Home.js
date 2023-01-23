import React, { useRef } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header} from "../components";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />
      
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