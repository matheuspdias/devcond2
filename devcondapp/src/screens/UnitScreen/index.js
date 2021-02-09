import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import UnitPeopleSection from '../../components/UnitPeopleSection';
import UnitVehicleSection from '../../components/UnitVehicleSection';
import UnitPetSection from '../../components/UnitPetSection';
import UnitModalAddPerson from '../../components/UnitModalAddPerson';
import UnitModalAddVehicle from '../../components/UnitModalAddVehicle';
import UnitModalAddPet from '../../components/UnitModalAddPet';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [peopleList, setPeopleList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [petList, setPetList] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: `Dados da unidade (${context.user.property.name})`
        });
        getUnitInfo();
    }, []);

    const getUnitInfo = async () => {
        setLoading(true);
        const result = await api.getUnitInfo();
        setLoading(false);
        if(result.error === '') {
            setPeopleList(result.peoples);
            setVehicleList(result.vehicles);
            setPetList(result.pets);
        } else {
            alert (result.error);
        }
    }

    const handleAdd = (type) => {
        setModalType(type);
        setShowModal(true);
    }

    return (
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon color="#8B63E7" size="large" />
                }
                {!loading &&
                    <>
                        <C.TitleArea>
                            <C.Title>Moradores</C.Title>
                            <C.TitleAddButton onPress={()=>handleAdd('person')}>
                                <Icon name="plus" size={24} color="#000" />
                            </C.TitleAddButton>
                        </C.TitleArea>
                        <C.ListArea>
                            <UnitPeopleSection 
                                list={peopleList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>

                        <C.TitleArea>
                            <C.Title>Veículos</C.Title>
                            <C.TitleAddButton onPress={()=>handleAdd('vehicle')}>
                                <Icon name="plus" size={24} color="#000" />
                            </C.TitleAddButton>
                        </C.TitleArea>
                        <C.ListArea>
                            <UnitVehicleSection 
                                list={vehicleList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>

                        <C.TitleArea>
                            <C.Title>Pets</C.Title>
                            <C.TitleAddButton onPress={()=>handleAdd('pet')}>
                                <Icon name="plus" size={24} color="#000" />
                            </C.TitleAddButton>
                        </C.TitleArea>
                        <C.ListArea>
                            <UnitPetSection 
                                list={petList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>
                    </>
                }
            </C.Scroller>  

            <C.ModalArea
                visible={showModal}
                transparent={true}
                animationType="slide"
            >
                <C.ModalBg>
                    <C.ModalBody>
                        {modalType === 'person' &&
                            <UnitModalAddPerson 
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }
                        {modalType === 'vehicle' &&
                            <UnitModalAddVehicle 
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }
                        {modalType === 'pet' &&
                            <UnitModalAddPet 
                                refreshFunction={getUnitInfo}
                                setShowModal={setShowModal}
                            />
                        }
                    </C.ModalBody>
                </C.ModalBg>
            </C.ModalArea>          
        </C.Container>
    );
}