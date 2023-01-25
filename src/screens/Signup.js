import {
    Text,
    View,
    StyleSheet,
    SafeAreaView} from 'react-native'
import { 
    CustomButton,
    CustomInput
        } from '../components';
const Signup = ()=>{
    return(
        <View style={styles.container}>
        <Text  style={styles.text}>Create Account with us:</Text>
        <CustomInput type='user_name' icon='account' label='true' />
      <CustomInput type='email' icon='email' label='true' />
      <CustomInput type='password' icon='account-lock' label='true' />
        <CustomButton screen="Home" sujet="Home"/>
        <CustomButton screen="Login" sujet="Login"/>
        </View>
        
    )
}
export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
      backgroundColor: "#fff",
    },
    text:{
      fontSize: 40,
      color: '#0a9dfb',
      paddingLeft: 32,
      
    },
    
  });