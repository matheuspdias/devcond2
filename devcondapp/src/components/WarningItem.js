import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.View`
    backgroundColor: #FFF;
    borderWidth: 2px;
    borderColor: #E8E9ED;
    borderRadius: 15px;
    padding: 15px;
    marginBottom: 10px;
`;
const Date = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #9C9DB9;
    marginBottom: 10px;
`;
const Title = styled.Text`
    fontSize: 15px;
    color: #000;
`;
const StatusArea = styled.View`
    flexDirection: row;
    alignItems: center;
    margin: 10px 0;
`;
const StatusText = styled.Text`
    fontSize: 14px;
    color: #9C9DB9;
    marginLeft: 10px;
`;
const PhotosArea = styled.View`
    flexDirection: row;
`;
const PhotoItem = styled.TouchableOpacity`
    marginRight: 10px;
`;
const PhotoImage = styled.Image`
    width: 50px;
    height: 50px;
    borderRadius: 10px;
`;
const ModalArea = styled.View`
    flex: 1;
    backgroundColor: #000;
`;
const ModalImage = styled.Image`
    flex: 1;
`;
const ModalCloseButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 10px;
`;

export default ({data}) => {    

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (img) => {
        setModalImage(img);
        setShowModal(true);
    }

    return (
        <Box>
            <Date>{data.datecreated}</Date>
            <Title>{data.title}</Title>
            <StatusArea>
                <Icon name="inbox" size={24} color="#8B63E7" />
                <StatusText>
                    {data.status === 'IN_REVIEW' && 'Ocorrência em análise'}
                    {data.status === 'RESOLVED' && 'Resolvido'}
                </StatusText>
            </StatusArea>
            {data.photos.length > 0 &&
                <PhotosArea>
                    {data.photos.map((item, index) => (
                        <PhotoItem key={index} onPress={()=>openModal(item)}>
                            <PhotoImage source={{uri: item}} resizeMode="cover" />
                        </PhotoItem>
                    ))}
                </PhotosArea>
            }
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={()=>setShowModal(false)}
            >
                <ModalArea>
                    <ModalImage source={{uri: modalImage}} resizeMode="contain" />
                    <ModalCloseButton onPress={()=>setShowModal(false)}>
                        <Icon name="close" size={24} color="#FFF" />
                    </ModalCloseButton>
                </ModalArea>
            </Modal>
        </Box>
    );
}