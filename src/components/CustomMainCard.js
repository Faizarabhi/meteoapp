import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
const CustomMainCard = ({name}) => {
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.left}>
                <View style={styles.card}>
                    <Text>03/12</Text>
                    <Text style={styles.day}>WED</Text>
                    <Text>{name}</Text>
                    <Text style={styles.deg}>+10°C</Text>
                </View>

            </View>
            <View style={styles.right}>
                <Image style={styles.img} source={require('../../assets/cloudy.png')} />
            </View>
        </TouchableOpacity>
    )
}
export default CustomMainCard
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
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
        borderWidth: 4
    },
    right: {
        // backgroundColor: 'green',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4
    },
    img: {

        width: '100%',
        height: '100%',
        resizeMode: 'contain',
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