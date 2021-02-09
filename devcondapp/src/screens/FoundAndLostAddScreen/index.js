import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [photo, setPhoto] = useState({});
    const [description, setDescription] = useState('');
    const [where, setWhere] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Adicionar um Perdido'
        });
    }, []);

    const handleAddPhoto = () => {
        launchCamera({
            mediaType: 'photo',
            maxWidth: 1280
        }, (response) => {
            if(!response.didCancel) {
                setPhoto(response);
            }
        })
    }

    const handleSave = async () => {
        if(description !== '' && where != '' && photo.uri !== '') {
            const result = await api.addLostItem(
                photo, description, where
            );
            if(result.error === '') {
                setPhoto({});
                setDescription('');
                setWhere('');
                navigation.navigate('FoundAndLostScreen');
            } else {
                alert(result.error);
            }
        } else {
            alert('Preencha os campos');
        }
    }

    return (
        <C.Container>
            <C.Scroller>
                <C.PhotoArea>
                    {!photo.uri &&
                        <C.ButtonArea onPress={handleAddPhoto}>
                            <C.ButtonText>Adicionar uma foto</C.ButtonText>
                        </C.ButtonArea>
                    }

                    {photo.uri &&
                        <>
                            <C.PhotoItem source={{uri: photo.uri}} resizeMode="cover" />
                            <C.ButtonArea onPress={handleAddPhoto}>
                            <C.ButtonText>Adicionar mais fotos</C.ButtonText>
                        </C.ButtonArea>
                        </>
                    }
                </C.PhotoArea>
                <C.Title>Descreva o produto</C.Title>
                <C.Field 
                     placeholder="Ex: Carteira de couro"
                     value={description}
                     onChangeText={t=>setDescription(t)}
                />
                <C.Title>Onde foi encontrado</C.Title>
                <C.Field 
                     placeholder="Ex: No pátio principal"
                     value={where}
                     onChangeText={t=>setWhere(t)}
                />

                <C.ButtonArea onPress={handleSave}>
                    <C.ButtonText>Salvar</C.ButtonText>
                </C.ButtonArea>
            </C.Scroller>
        </C.Container>
    );
}