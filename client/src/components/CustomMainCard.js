import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CustomMainCard = () => {
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.left}>
                <View style={styles.card}>
                    <Text>03/12</Text>
                    <Text style={styles.day}>WED</Text>
                    <Text style={styles.deg}>+10°C</Text>
                    <Text>Sunday</Text>
                    <View style={styles.temp}>
                    <Text>16 mph</Text>
                    <MaterialCommunityIcons name="weather-windy" size={24} color="white" />
                    <Text>12 km/h</Text>
                    <MaterialCommunityIcons name="fan-speed-1" size={24} color="white" />
                    </View>
                    <View style={styles.temp}>
                        <Text style={styles.deg}>17°</Text>
                        <MaterialCommunityIcons name="arrow-down-thin" size={24} color="white" />
                        <Text style={styles.deg}>3°</Text>
                        <MaterialCommunityIcons name="arrow-up-thin" size={24} color="white" />
                    </View>

                </View>

            </View>
            <View style={styles.right}>
                <Image style={styles.img} source={require('../../assets/cloudy.png')} />
            </View>
        </TouchableOpacity>
    )
}
export default CustomMainCard

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%'
    },
    left: {
        // backgroundColor: 'yellow',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        // backgroundColor: 'green',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {

        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    temp:{
        flexDirection: 'row',
    },
    text:{
        color: 'white'

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    day: {
        fontSize: 30,
        fontWeight: Platform.OS === 'android' ? 'normal' : '300',
        color: 'black'
    },
    deg: {
        fontSize: 20,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        color: 'white'
    }
})