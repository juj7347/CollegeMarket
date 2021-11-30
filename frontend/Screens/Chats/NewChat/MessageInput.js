import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions
} from "react-native";
import { Input } from "native-base";

var {width} = Dimensions.get('window');

const MessageInput = () => {
    return (
        <View style={styles.inputContainer}>
            <Input
                style={styles.messageInput}
            />
            <Button
                title="Send"
                style={styles.sendButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        width: width,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gainsboro'
    },
    messageInput: {
        height: 40,
        width: width - 100,
        borderColor: 'gray',
        borderRadius: 50,
        padding: 10,
        backgroundColor: 'white'
    },
    sendButton: {

    }
});

export default MessageInput;