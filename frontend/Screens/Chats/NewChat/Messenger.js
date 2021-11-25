import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

import ChatBox from "./ChatBox";
import ChatMenu from "./ChatMenu";
import ChatOnline from "./ChatOnline";
import Conversations from "./Conversations";
import Message from "./Message";

var {height} = Dimensions.get('window');

const Messenger = () => {
    return (
        <View style={styles.container}>
            {/*
            <View style={styles.chatMenu}>
                <ChatMenu/>
            </View>
            <View style={styles.chatBox}>
                <ChatBox/>
            </View>
            <View style={styles.chatOnline}>
                <ChatOnline/>
            </View>
            */}
            <Message owner={true}/>
            <Message/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height - 70,
        display: 'flex'
    },
    chatMenu: {
        flex: 3.5
    }, 
    chatBox: {
        flex: 3.5
    },
    chatOnline: {
        flex: 3
    }
});

export default Messenger;