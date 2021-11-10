import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ChatList from "./ChatList";

const data = require('../../assets/data/chat.json');

const ChattingContainer = () => {

    const [opponent, setOpponent] = useState([]);

    useEffect(() =>{
        setOpponent(data);
    }, []);

    return (
        <>

        <SafeAreaView>
            <ScrollView>
                {opponent.length > 0 ? (
                    <View>
                    {opponent.map((item)=>{
                        return (
                            <ChatList/>
                        )
                    })}
                    </View>
                ) : (
                    <View>
                        <Text>대화상대가 없습니다</Text>
                    </View>
                )}
                
            </ScrollView>
        </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    
})

export default ChattingContainer;