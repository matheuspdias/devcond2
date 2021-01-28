import React, { useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.View`
    backgroundColor: #FFF;
    borderWidth: 2px;
    borderColor: #E8E9ED;
    borderRadius: 20px;
    padding: 15px;
    marginBottom: 10px;
`;

const HeaderArea = styled.View`
    flexDirection: row;
    alignItems: center;
`;
const InfoArea = styled.View`
    marginLeft: 15px;
    flex: 1;
`;
const Title = styled.Text`
    fontSize: 17px;
    fontWeight: bold;
    color: #000;
`;
const Date = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #9C9DB9;
`;

const Body = styled.Text`
    fontSize: 15px;
    color: #000;
    margin: 15px 0;
`;

const FooterArea = styled.View`
    flexDirection: row;
    alignItems: center;
`;
const LikeButton = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    justifyContent: center;
    alignItems: center;
`;
const LikeText = styled.Text`
    marginLeft: 5px;
    fontSize: 13px;
    color: #9C9DB9;
`;

export default ({data}) => {

    const [likeCount, setLikeCount] = useState(data.likes);
    const [liked, setLiked] = useState(data.liked);

    const handleLike = async () => {
        setLiked(!liked);
        const result = await api.likeWallPost(data.id);
        if(result.error === '') {
            setLikeCount( result.likes );
            setLiked( result.liked );
        } else {
            alert(result.error);
        }
    }

    return (
        <Box>
            <HeaderArea>
                <Icon name="newspaper-o" size={30} color="#8B63E7" />
                <InfoArea>
                    <Title>{data.title}</Title>
                    <Date>{data.datecreated}</Date>
                </InfoArea>
            </HeaderArea>
            <Body>
                {data.body}
            </Body>
            <FooterArea>
                <LikeButton onPress={handleLike}>
                    {liked ? 
                        <Icon name="heart" size={17} color="#FF0000" />
                    : 
                        <Icon name="heart-o" size={17} color="#FF0000" />
                    }
                    
                </LikeButton>
                <LikeText>{likeCount} pessoa{likeCount===1?'':'s'} curti{likeCount==1?'u':'ram'}</LikeText>
            </FooterArea>
        </Box>
    );
}