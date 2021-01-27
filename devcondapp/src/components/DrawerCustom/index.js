import React from 'react';
import C from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default (props) => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const menus = [
        {title: 'Mural de Avisos', icon: 'inbox', screen: 'WallScreen'},
        {title: 'Documentos', icon:'file-text', screen: 'DocumentScreen'},
        {title: 'Reservas', icon:'calendar', screen: 'ReservationScreen'},
        {title: 'Livro de Ocorrências', icon: 'bug', screen: 'WarningScreen'},
        {title: 'Achados e Perdidos', icon: 'search', screen: 'FoundAndLostScreen'},
        {title: 'Boletos', icon: 'wpforms', screen: 'BilletScreen'},
        {title: 'Perfil', icon: 'user', screen : 'ProfileScreen'}
    ];

    const handleChangeUnit = async () => {
        await AsyncStorage.removeItem('property');
        navigation.reset({
            index: 1,
            routes: [{name: 'ChoosePropertyScreen'}]
        })
    }

    const handleLogoutButton = async () => {
        await api.logout();
        navigation.reset({
            index:1,
            routes: [{name: 'LoginScreen'}]
        })
    }

    return (
        <C.DrawerArea>
            <C.DrawerLogoArea>
                <C.DrawerLogo source={require('../../assets/homelogo.png')} resizeMode="contain" />
            </C.DrawerLogoArea>
            <C.DrawerScroller>
                {menus.map((item, index) => (
                    <C.MenuButton key={index} onPress={()=>navigation.navigate(item.screen)}>
                        <C.MenuSquare></C.MenuSquare>
                        <Icon name={item.icon} size={20} color={'#666E78'} />
                        <C.MenuButtonText>{item.title}</C.MenuButtonText>
                    </C.MenuButton>
                ))}
                <C.MenuButton onPress={handleLogoutButton}>
                    <C.MenuSquare></C.MenuSquare>
                    <Icon name="toggle-left" size={20} color={'#666E78'} />
                    <C.MenuButtonText>Sair</C.MenuButtonText>
                    </C.MenuButton>
            </C.DrawerScroller>
            <C.ChangeUnitArea>
                <C.ChangeUnitButton onPress={handleChangeUnit}>
                    <C.ChangeUnitButtonText>Trocar Unidade</C.ChangeUnitButtonText>
                </C.ChangeUnitButton>
            </C.ChangeUnitArea>
            <C.FooterArea>
                <C.FooterInfo>
                    <C.FooterProfile>Olá {context.user.user.name}</C.FooterProfile>
                    <C.FooterUnitText>{context.user.property.name}</C.FooterUnitText>
                </C.FooterInfo>
                <C.FooterUnitButton onPress={()=>navigation.navigate('UnitScreen')}>
                    <Icon name="gear" size={24} color="#666E78" />
                </C.FooterUnitButton>
            </C.FooterArea>
        </C.DrawerArea>
    );
}