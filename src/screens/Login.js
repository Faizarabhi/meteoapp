import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { CustomInput, Header, CustomButton} from "../components";
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.form}>
      <Text  style={styles.text}>Log with us</Text>
      <CustomInput type='email' icon='email'/>
      <CustomInput type='password' icon='account-lock'/>
      <CustomButton  screen="Home" sujet='Log in' />
      <CustomButton   screen="Signup" sujet='Create Account'/>
      </View>
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
    justifyContent:'center',
    
  },
  text:{
    fontSize: 50,
    color: '#0a9dfb',
    paddingLeft: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  
});