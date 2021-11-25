import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

var {width} = Dimensions.get('window');

const Message = (props) => {
    
    return (
        <View style={[styles.messageContainer, props.owner ? {alignItems: "flex-end"} : null]}>
            <View style={styles.messageTop}>
                <Image style={styles.messageImage} source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.seaicons.com%2F%25EC%258B%25A0%25ED%2598%25B8-%25EC%25A0%2595%25EB%25B3%25B4-%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598%2F&psig=AOvVaw0UH5ObGN3x9Mg6gbtr6V6V&ust=1637942825401000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICQo9bys_QCFQAAAAAdAAAAABAj"}}/>
                <View style={props.owner ? styles.messageOwner : styles.message}>
                    <Text style={[props.owner ? {color: "black"} : {color: "white"}]}>messagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessage</Text>
                </View>
            </View>
            <View style={styles.messageBottom}>
                <Text style={styles.timeText}>1 hour ago</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    messageOwner: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'gray',
        maxWidth: width / 2
    },
    message: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'blue',
        maxWidth: width / 2
    },
    messageImage: {
        //width: 32,
        //height: 32,
        //borderRadius: 50
    },
    messageTop: {
        display: 'flex'
    },
    messageBottom: {
        marginTop: 5
    },
    messageText: {

    },
    timeText: {
        fontSize: 12,
    }
})

export default Message; 