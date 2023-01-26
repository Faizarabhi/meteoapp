import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
const CustomCard = ({ data }) => {
    // console.log('/----------------------- another one-------------------------/')
    // console.log(data,'custimaze')
    //  {"date": "2023-01-31 12:00:00", "desc": "Clear", "icon": "01d", 
    // "temp": 289.99, "temp_max": 289.99, "temp_min": 289.99, 
    // "wind": {"deg": 87, "gust": 4.68, "speed": 3.45}
    let state = data.data
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
            <Text>{state.wind.deg}°C</Text>
                {/* <Image source={data[0].img} style={styles.img} /> */}
                <Text>{state.desc}</Text>
                <Text style={styles.day}>{state.wind.speed}</Text>
                <Text style={styles.deg}>+{state.temp}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default CustomCard
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#0a9dfb',
        opacity: 0.7,
        margin: 10,
        height: '60%',
        padding: 12
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    day: {
        fontSize: 30,
        fontWeight: Platform.OS === 'android' ? 'normal' : '300',
        color: '#84d4fc'
    },
    deg: {
        fontSize: 20,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        color: 'white'
    }
})