import React, { useLayoutEffect, useState, useRef, useContext, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    FlatList
} from "react-native";

import Text from "../../Shared/StyledComponents/Text";

import {
    ScrollContainer,
    Container,
    CardContainer,
    Header,
    Row,
    User,
    Time,
    Post,
    PostContent,
    Photo,
    BottomDivider,
    ButtonWithText,
    Footer
} from "../../Shared/StyledComponents/Card";

import { Entypo, AntDesign } from "react-native-vector-icons";

import Avatar from "../../Shared/Avatar";

import CommentBox from "./Comment/CommentBox";
import Comment from "./Comment/Comment";

import baseURL from "../../assets/common/baseURL";
import axios from 'axios';

import AuthGlobal from "../../Context/store/AuthGlobal";


const SinglePost = (props) => { 
    
    const context = useContext(AuthGlobal);

    const [text, setText] = useState(props.route.params.content.text);
    const [image, setImage] = useState(props.route.params.content.image);
    const [id, setId] = useState(props.route.params.content.id);
    const [liked, setLiked] = useState(false);

    const [comments, setComments] = useState([]);

    const textFocus = useRef();

    const likePost = () => {
        const config = {
            headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}
        };

        axios
            .put(`${baseURL}wishlist/post/like/${context.stateUser.user.userId}`, {like: !liked, itemId: id}, config)
            .then((res) => {

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {

        axios
            .get(`${baseURL}comments/${id}` , {headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}})
            .then((res) => {
                setComments(res.data);
            })
            .catch((error)=>console.log(error));

        axios
            .get(`${baseURL}wishlist/post/${context.stateUser.user.userId}`, {headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}})
            .then((res)=>{
                if(res.data.postList.includes(id)) {
                    setLiked(true)
                }
            })
            .catch((error) => console.log(error));

    },[])

    useLayoutEffect(() => {

        props.navigation.setOptions({
            headerLeft: () => (
                <Container>
                    <Header>
                        <TouchableOpacity
                            style={{marginRight: 10}}
                            onPress={()=> props.navigation.goBack()}
                        >
                            <AntDesign
                                name="left"
                                color="#000000"
                                size={18}
                            />
                        </TouchableOpacity>
                        <Row>
                            <Avatar
                                source={require("../../assets/users/graduation-cap.png")}
                            />
                            <View style={{paddingLeft: 10}}>
                                <User>
                                    {"sdf"}
                                </User>
                                
                                <Row>
                                    <Time>
                                        {Date.now()}
                                    </Time>
                                    <Entypo
                                        name="dot-single"
                                        size={12}
                                        color="#747476"
                                    />
                                    <Entypo
                                        name="globe"
                                        size={10}
                                        color="#747476"
                                    />
                                </Row>
                            </View>
                        </Row>

                    </Header>
                </Container>
            ),
            headerTitle: '',
            headerRight: () => (
                <TouchableOpacity style={{marginRight: 10}}>
                    <Entypo
                        name="dots-three-horizontal"
                        size={15}
                        color="#222121"
                    />
                </TouchableOpacity>
            ),
            tabBarStyle: {display: 'none'}
        })

        return () => {
            
        }
    }, [props.navigation])



    return (
        <Container white>
            <FlatList
                ListHeaderComponent={
                <>
                <Post>
                    <PostContent>
                        {text}
                    </PostContent>
                </Post>
                <Photo
                    source={{uri: image ? image : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}}
                />
                <BottomDivider marginTop={10}/>
                    <Footer justifyContent={"space-around"} height={35}>
                        <Row>
                            <ButtonWithText
                                onPress={() => {
                                    likePost();
                                    setLiked(!liked);
                                }}
                            >
                                <AntDesign
                                        name="like1"
                                        size={18}
                                        color={liked ? 'blue' : 'black'}
                                />
                                <Text medium marginLeft={10}>좋아요</Text>
                            </ButtonWithText>
                        </Row>
                        <Row>
                            <ButtonWithText
                                onPress={() => textFocus.current.focus()}
                            >
                                <AntDesign
                                    name="book"
                                    size={18}
                                />
                                <Text medium marginLeft={18}>댓글 {comments.length}</Text>
                            </ButtonWithText>
                        </Row>
                    </Footer>
                <BottomDivider/>
                </>
                }
                data={comments}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <Comment
                        userProfile={item.userProfile}
                        description={item.description}
                    />
                )}
            />
            <BottomDivider/>
            <CommentBox
                textFocus={textFocus}
                postId={id}
                setComments={setComments}
            />
        </Container>
    )
}

export default SinglePost;