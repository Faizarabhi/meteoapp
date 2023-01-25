import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from "react-native";
import { CustomInput, Header, CustomButton } from "../components";
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.form}>
        <View style={styles.main}>
          <Image source={require('../../assets/login.png')} style={styles.img} />
        </View>
        <Text style={styles.text}>Log with us</Text>
        <CustomInput type='email' icon='email' label='true' />
        <CustomInput type='password' icon='account-lock' label='true' />
        <CustomButton screen="Home" sujet='Log in' />
        <CustomButton screen="Signup" sujet='Create Account' />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  coontainer: {
    backgroundColor: '#eee',

  },
  main: {
    width: '60%',
    height: '60%',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  form: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',

  },
  text: {
    fontSize: 50,
    color: '#0a9dfb',
    paddingLeft: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: '100%',
    height: '40%',
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  img: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',

  }

});