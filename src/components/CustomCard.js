import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image 
} from 'react-native'
const CustomCard = ({img,name}) => {
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
                <Image source={img} style={styles.img} />
                <Text>{name} </Text>
                <Text style={styles.day}>WED</Text>
                <Text style={styles.deg}>+10°C</Text>
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
        height: '40%'
    },
    card :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    img:{
        width:40,
        height:40,
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