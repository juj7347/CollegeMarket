import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import {
    Badge
} from "native-base";

var {width} = Dimensions.get('window');

const Message = (props) => {
    
    return (
        <View style={[styles.messageContainer, props.owner ? {alignItems: "flex-end"} : null]}>
            <View style={styles.messageTop}>
                {/*profile pic*/}
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