import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

const Box = styled.View`
    width: 200px;
    borderWidth: 1px;
    borderColor: #CCC;
    borderRadius: 5px;
    backgroundColor: #FFF;
    marginRight: 20px;
`;
const Photo = styled.Image`
    height: 150px;
    borderRadius: 5px;
`;
const Title = styled.Text`
    fontSize: 15px;
    margin: 10px;
    height: 50px;
`;
const InfoTitle = styled.Text`
    fontWeight: bold;
    color: #9C9DB9;
    margin: 10px 10px 0 10px;
`;
const InfoText = styled.Text`
    fontWeight: bold;
    color: #000;
    margin: 0 10px 10px 10px;
`;

const MineButton = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #8B63E7;
    padding: 10px;
    borderRadius: 5px;
    margin: 10px;
`;
const MineButtonText = styled.Text`
    color: #FFF;
    fontWeight: bold;
    marginLeft: 10px;
`;

export default ({data, showButton, refreshFunction}) => {

    const handleIsMine = () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que este item é seu?',
            [
                {text: 'Sim, é meu', onPress: handleSetRecovered},
                {text: 'Cancelar', onPress: null, styled: 'cancel'}
            ]
        );
    }

    const handleSetRecovered = async () => {
        const result = await api.setRecovered(data.id);
        if(result.error === '') {
            refreshFunction();
            alert('Pegue seu item perdido na portaria');            
        } else {
            alert(result.error);
        }
    }

    return (
        <Box>
            <Photo source={{uri: data.photo}} rezideMode="cover" />
            <Title>{data.description}</Title>

            <InfoTitle>Encontrado em</InfoTitle>
            <InfoText>{data.where}</InfoText>

            <InfoTitle>Data</InfoTitle>
            <InfoText>{data.datecreated}</InfoText>

            {showButton &&
                <MineButton onPress={handleIsMine}>
                <Icon name="hand-pointer-o" size={24} color="#FFF" />
                <MineButtonText>É meu</MineButtonText>
                </MineButton>
            }
        </Box>
    );
}