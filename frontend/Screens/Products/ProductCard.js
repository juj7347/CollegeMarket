import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text, 
    Button
} from 'react-native';

var {width} = Dimensions.get("window");

const ProductCard = (props) => {

    const { name, price, image, countInStock} = props;

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                resizeMode="contain"
                source={{uri: image ? image : "https://www.google.com/search?q=image&rlz=1C1AVFC_enKR882KR882&sxsrf=AOaemvIj_Mfw_7deIX4ihhZHKqyJUaIqnQ:1636032987406&tbm=isch&source=iu&ictx=1&fir=qXynBYpZpHkhWM%252C0rHTVAgbQlpKpM%252C_%253BA4G7eW2zetaunM%252CAqe2PquvrkKwdM%252C_%253B2DNOEjVi-CBaYM%252CwPLWjDWgIrkAZM%252C_%253BL8xfQakH9a8tJM%252CQG4MQQA3E95exM%252C_%253B1Y5Fex7Bw6VMkM%252CyirazPQkCwjuyM%252C_%253BgxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BY6pVL1x5vDTXyM%252CTytwG82DNqXFFM%252C_%253BtTplitM2kjOQtM%252Cr8g4dM_hvefkuM%252C_%253ByocyzzP8XUOX9M%252CtwE4vJIAwbfdCM%252C_%253BHXLlNEpHoJATkM%252CwJy6d5uce-qbnM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BEpRLN6-qK_nc8M%252CvYH9dcrlJsKt0M%252C_&vet=1&usg=AI4_-kQJ-Bg6-YR4Z4OlwqGxYT8wUaFxJQ&sa=X&ved=2ahUKEwjv-7fo6f7zAhWlIqYKHYWLAWAQ9QF6BAgaEAE#imgrc=A4G7eW2zetaunM"}}    
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + '...' : name
                }
            </Text>
            <Text style={styles.price}></Text>

            {countInStock > 0 ? (
                <View style={{ marginBottom: 60}}>
                    <Button title={'Add'} color={'green'} />
                </View>
            ) : <Text style={{marginTop: 20}}>Currently Unavailable</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: "orange",
        marginTop: 10
    }
})

export default ProductCard;