import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.TouchableOpacity`
    backgroundColor: #FFF;
    borderWidth: 2px;
    borderColor: #E8E9ED;
    borderRadius: 15px;
    padding: 15px;
    marginBottom: 10px;
    flexDirection: row;
    alignItems: center;
`;
const Title = styled.Text`
    fontSize: 15px;
    color: #000;
    marginLeft: 10px;
`;

export default ({data}) => {

    const handleClick = async () => {
        const supported = await Linking.canOpenURL( data.fileurl );
        if(supported) {
            await Linking.openURL( data.fileurl );
        }
    }

    return (
        <Box onPress={handleClick}>
            <Icon name="file-text" size={30} color="#8B63E7" />
            <Title>{data.title}</Title>
        </Box>
    );
}