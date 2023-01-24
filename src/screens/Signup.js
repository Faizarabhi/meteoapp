import {
    Text,
    View,
    StyleSheet} from 'react-native'
import { 
    CustomButton,
    CustomInput
        } from '../components';
const Signup = ()=>{
    return(
        <View style={styles.container}>
        <Text  style={styles.text}>Create Account with us:</Text>
        <CustomInput type='user_name' icon='account'/>
      <CustomInput type='email' icon='email'/>
      <CustomInput type='password' icon='account-lock'/>
        <CustomButton screen="Login" sujet="Login"/>
        <CustomButton screen="Home" sujet="Home"/>
        </View>
    )
}
export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    text:{
      fontSize: 40,
      color: '#0a9dfb',
      paddingLeft: 32,
      justifyContent: "center",
      alignItems: "center",
    },
    
  });