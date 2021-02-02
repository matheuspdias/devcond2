import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Box = styled.TouchableOpacity`
    backgroundColor: #FFF;
    borderWidth: 2px;
    borderColor: #E8E9ED;
    borderRadius: 15px;
    marginBottom: 15px;
    paddingBottom: 10px;
`;
const CoverImage = styled.Image`
    backgroundColor: #CCC;
    height: 150px;
    borderRadius: 15px;
`;
const Title = styled.Text`
    fontSize: 18px;
    color: #000;
    fontWeight: bold;
    margin: 10px;
`;
const DateText = styled.Text`
    fontSize: 13px;
    fontWeight: bold;
    color: #9C9DB9;
    margin: 0 10px;
    textTransform: uppercase;
`;
const DateItem = styled.Text`
    fontSize: 15px;
    color: #000;
    margin: 0 10px;
`;

export default ({data}) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('ReservationAddScreen', {data});
    }

    return (
        <Box onPress={handleClick}>
            <CoverImage source={{uri: data.cover}} resizeMode="cover" />
            <Title>{data.title}</Title>
            <DateText>Horários de funcionamento:</DateText>
            {data.dates.map((item, index) => (
                <DateItem key={index}>{item}</DateItem>
            ))}
        </Box>
    );
}