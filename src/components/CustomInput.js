import * as React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text
    } from  'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomInput = ({type, icon})=>{
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
        <Text style={styles.label}>{type}:</Text>
        <MaterialCommunityIcons name={icon} size={24} style={styles.icon} color="black" />
      <TextInput
        label={type}
        style={styles.input}
        value={text}
        placeholder={type}
        onChangeText={text => setText(text)}
      />
      
      </View>
)
}
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
export default CustomInput
const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems: 'center'
},
label:{
    fontSize: 32,
    margin: 11,
    textTransform: 'capitalize'
},
input:{
    borderColor: "#0a9dfb",
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 11
},
icon:{
    position: "absolute",
    bottom: 22,
    right: 60,
    color: '#0a9dfb'
}
})