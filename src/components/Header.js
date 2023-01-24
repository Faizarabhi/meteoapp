import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from "react-native";
import { Entypo } from '@expo/vector-icons';
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const Header = () => {

    return (
        <SafeAreaView style={styles.headerContainer} >
            <TouchableOpacity>
                <Entypo name="cloud" size={50} color="#84d4fc" />
            </TouchableOpacity>
                <Text style={styles.logo} >Logo</Text>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        padding: 12
    },
    logo:{
        fontSize: 22,
        fontWeight: '600',
        
    }
})