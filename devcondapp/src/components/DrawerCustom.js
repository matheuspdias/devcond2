import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStateValue } from '../contexts/StateContext';
import api from '../services/api';


  const DrawerArea = styled.View`
        flex: 1;
        backgroundColor: #FFF;
    `;
    const DrawerLogoArea = styled.View`
        padding: 10px 20px;
        borderBottomWidth: 1px;
        borderBottomColor: #EEE;
    `;
    const DrawerLogo = styled.Image`
        width: 190px;
        height: 40px;
    `;
    const DrawerScroller = styled.ScrollView`
        flex: 1;
        margin: 20px 0;
    `;
    const ChangeUnitArea = styled.View`
        margin: 10px;
    `;
    const ChangeUnitButton = styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        justifyContent: center;
        alignItems: center;
        borderRadius: 5px;
    `;
    const ChangeUnitButtonText = styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `;
    const FooterArea = styled.View`
        padding: 20px;
        flexDirection:row;
        justifyContent: space-between;
        alignItems: center;
    `;
    const FooterInfo = styled.View``;
    const FooterProfile = styled.Text`
        fontSize: 15px;
        color: #000;
    `;
    const FooterUnitText = styled.Text`
        fontSize: 15px;
        color: #666E78;
    `;
    const FooterUnitButton = styled.TouchableOpacity``;
    const MenuButton = styled.TouchableOpacity`
        flexDirection: row;
        marginBottom: 5px;
        borderRadius: 5px;
        alignItems: center;
    `;
    const MenuSquare = styled.View`
        width: 5px;
        height:  35px;
        marginRight: 20px;
        backgroundColor: transparent;
        borderTopRightRadius: 5px;
        borderBottomRightRadius: 5px;
    `;
    const MenuButtonText = styled.Text`
        fontSize: 15px;
        marginLeft: 10px;
        color: #666E78;
    `;

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
        <DrawerArea>
            <DrawerLogoArea>
                <DrawerLogo source={require('../assets/homelogo.png')} resizeMode="contain" />
            </DrawerLogoArea>
            <DrawerScroller>
                {menus.map((item, index) => (
                    <MenuButton key={index} onPress={()=>navigation.navigate(item.screen)}>
                        <MenuSquare></MenuSquare>
                        <Icon name={item.icon} size={20} color={'#666E78'} />
                        <MenuButtonText>{item.title}</MenuButtonText>
                    </MenuButton>
                ))}
                <MenuButton onPress={handleLogoutButton}>
                    <MenuSquare></MenuSquare>
                    <Icon name="toggle-left" size={20} color={'#666E78'} />
                    <MenuButtonText>Sair</MenuButtonText>
                    </MenuButton>
            </DrawerScroller>
            <ChangeUnitArea>
                <ChangeUnitButton onPress={handleChangeUnit}>
                    <ChangeUnitButtonText>Trocar Unidade</ChangeUnitButtonText>
                </ChangeUnitButton>
            </ChangeUnitArea>
            <FooterArea>
                <FooterInfo>
                    <FooterProfile>Olá {context.user.user.name}</FooterProfile>
                    <FooterUnitText>{context.user.property.name}</FooterUnitText>
                </FooterInfo>
                <FooterUnitButton onPress={()=>navigation.navigate('UnitScreen')}>
                    <Icon name="gear" size={24} color="#666E78" />
                </FooterUnitButton>
            </FooterArea>
        </DrawerArea>
    );
}