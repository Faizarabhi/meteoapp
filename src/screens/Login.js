import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Header} from "../components";
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />
      <View style={styles.form}>
      <Text  style={styles.text}>Log with us</Text>
      <Text>E-mail</Text>
      <TextInput  style={styles.input}/>
      </View >
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  form:{
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    width: '100%'
  },
  text:{
    fontSize: 50,
    color: 'blue',
  },
  input:{
    borderColor: '#eee',
    borderWidth: 2,
  }
});