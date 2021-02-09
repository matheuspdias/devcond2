import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.View``;
const Item = styled.View`
    backgroundColor: #FFF;
    borderWidth: 1px;
    borderColor: #E8E9ED;
    borderRadius: 5px;
    padding: 10px;
    flexDirection:row;
    alignItems: center;
    marginBottom: 5px
`;
const InfoArea = styled.View`
    flex: 1;

`;
const StrongText = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #000;
`;
const RegularText = styled.Text`
    fontSize: 14px;
    color: #9C9DB9;
`;
const RemoveButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
`;

export default ({list, refreshFunction}) => {
    const handleRemove = (index) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja exculir essa pessoa ?',
            [
                {text: 'Sim, tenho certeza', onPress:()=>removeItem(index)},
                {text: 'Cancelar', onPress: null, styled: 'cancel'}
            ]
        );
    }

    const removeItem = async (index) => {
        let result = await api.removeUnitItem(
            'person',
            list[index].id
        );
        if(result.error === '') {
            refreshFunction();
        } else {
            alert(result.error);
        }
    }

    return (
        <Box>
            {list.map((item, index) => (
                <Item key={index}>
                    <InfoArea>
                        <StrongText>{item.name}</StrongText>
                        <RegularText>Data de nascimento: {item.birthdate}</RegularText>
                    </InfoArea>
                    <RemoveButton onPress={()=>handleRemove(index)}>
                        <Icon name="remove" color="#FF0000" size={24} />
                    </RemoveButton>
                </Item>
            ))}
        </Box>
    );
}