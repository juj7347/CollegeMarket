import React from "react";
import {
    View,
    Dimensions,
    StyleSheet,
    Button
} from "react-native";
import {
    Container,
    Text,
    List,
    Heading,
    Box,
    Avatar
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from "react-redux";
import { clearWishList } from "../../../Redux/Actions/wishListActions";

var {height, width} = Dimensions.get('window');

const WishList = (props) => {
    return (
        <>
            <Heading style={{alignSelf: 'center'}}>관심목록</Heading>
            {props.wishListItems.length ?  (
                <Container>
                    {props.wishListItems.map((item)=>{
                        return (
                            <List.Item
                                style={styles.listItem}
                                key={Math.random()}
                            >
                                <Avatar
                                    source={{
                                        uri: item.product.image
                                            ? item.product.image
                                            : "https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"
                                    }}
                                />
                                <Box style={styles.body}>
                                    <Text>{item.product.name}</Text>
                                </Box>
                            </List.Item>
                        );
                    })}
                    <Button
                        title="Clear"
                        onPress={()=> props.clearWishList()}
                    />
                </Container>
            ) : (
                <Container style={styles.emptyContainer}>
                    <Text>관심목록이 비어있습니다</Text>
                    <Text>관심품목을 추가해주세요</Text>
                </Container>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    const { wishListItems } = state;
    return {
        wishListItems: wishListItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearWishList: () => {
            dispatch(clearWishList())
        }
    }
}

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
