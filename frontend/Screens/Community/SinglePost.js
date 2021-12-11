import React, { useLayoutEffect } from "react";
import { View, Text } from "native-base";


const SinglePost = (props) => {

    useLayoutEffect(() => {

        props.navigation.setOptions({
            headerTitle: () => {
                <Text>dsf</Text>
            }
        })

        return () => {
            
        }
    }, [props.navigation])



    return (
        <View>
            <Text>sdf</Text>
        </View>
    )
}

export default SinglePost;