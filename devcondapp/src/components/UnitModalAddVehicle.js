import React, { useState } from 'react';
import styled from 'styled-components/native';
import api from '../services/api';

const Box = styled.View`
    padding: 20px;
`;
const Title = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    marginBottom: 20px;
`;
const Label = styled.Text`
    fontSize: 16px;
    color: #000;
    marginBottom: 10px;
`;
const Field = styled.TextInput`
    backgroundColor: #FFF;
    borderWidth: 1px;
    borderColor: #CCC;
    borderRadius: 5px;
    color: #000;
    fontSize: 15px;
    padding: 10px;
    marginBottom: 15px;
`
const ButtonArea = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    marginTop: 20px;
`;
const SaveButton = styled.Button`
    flex: 1;
`;
const CancelButton = styled.Button`
    flex: 1;
`;

export default ({refreshFunction, setShowModal}) => {

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [plate, setPlate] = useState('');

    const handleAdd = async () => {
        
        if(title && color && plate) {
            const result = await api.addUnitItem(
                'vehicle',
                { title, color, plate }
            );
            if(result.error === '') {
                refreshFunction();
                setShowModal(false);
            } else {
                alert(result.error);
            }
        } else {
            alert('Preencha os campos');
        }
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    return (
        <Box>
            <Title>Adicionar novo Veiculo</Title>

            <Label>Nome do veículo:</Label>
            <Field 
                placeholder="Digite o nome do veiculo"
                value={title}
                onChangeText={t=>setTitle(t)}
            />

            <Label>Cor do veículo</Label>
            <Field 
                placeholder="Digite a cor do veiculo"
                value={color}
                onChangeText={t=>setColor(t)}
            />

            <Label>Placa do veículo</Label>
            <Field 
                placeholder="Digite placa do veiculo"
                value={plate}
                onChangeText={t=>setPlate(t)}
            />
            
            <ButtonArea>
                <SaveButton title="Adicionar" onPress={handleAdd} />
                <CancelButton color="#FF0000" title="Cancelar" onPress={handleCancel} />
            </ButtonArea>
        </Box>
    );
}