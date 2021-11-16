import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

var {width} = Dimensions.get('window');

const ListItem = (props) => {
    return (
        <View>
            <TouchableOpacity
                //onPRess
                style={[styles.container, {
                    backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro"
                }]}
            >
                <Image
                    source={{
                        uri: props.image
                        ? props.Image
                        : "https://w7.pngwing.com/pngs/276/655/png-transparent-logo-calgary-tower-business-white-instagram-icon-thumbnail.png"
                    }}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text styles={styles.item} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
                <Text styles={styles.item}>{props.price}원</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: width
    },
    image: {
        borderRadius: 50,
        width: width / 6,
        height: 20,
        margin: 2
    },
    item: {
        flexWrap: "wrap",
        margin: 3,
        width: width / 6
    }
})

export default ListItem;