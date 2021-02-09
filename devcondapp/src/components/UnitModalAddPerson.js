import React, { useState } from 'react';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
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

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());

    const handleAdd = async () => {
        
        if(name && date) {
            let year = date.getFullYear();
            let month = date.getMonth() +1;
            let day = date.getDate();

            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+day : day;

            let birthdate = `${year}-${month}-${day}`;

            const result = await api.addUnitItem(
                'person',
                { name:name, birthdate }
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
            <Title>Adicionar novo Morador</Title>

            <Label>Nome Completo:</Label>
            <Field 
                placeholder="Digite o nome completo"
                value={name}
                onChangeText={t=>setName(t)}
            />
            <Label>Data de Nascimento</Label>
            <DatePicker 
                mode="date"
                date={date}
                onDateChange={setDate}
                locale="pt-BR"
            />
            
            <ButtonArea>
                <SaveButton title="Adicionar" onPress={handleAdd} />
                <CancelButton color="#FF0000" title="Cancelar" onPress={handleCancel} />
            </ButtonArea>
        </Box>
    );
}