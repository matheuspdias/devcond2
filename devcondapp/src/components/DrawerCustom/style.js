import styled from 'styled-components/native';

export default {
    DrawerArea: styled.View`
        flex: 1;
        backgroundColor: #FFF;
    `,
    DrawerLogoArea: styled.View`
        padding: 10px 20px;
        borderBottomWidth: 1px;
        borderBottomColor: #EEE;
    `,
    DrawerLogo: styled.Image`
        width: 190px;
        height: 40px;
    `,
    DrawerScroller: styled.ScrollView`
        flex: 1;
        margin: 20px 0;
    `,
    ChangeUnitArea: styled.View`
        margin: 10px;
    `,
    ChangeUnitButton: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        justifyContent: center;
        alignItems: center;
        borderRadius: 5px;
    `,
    ChangeUnitButtonText: styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `,
    FooterArea: styled.View`
        padding: 20px;
        flexDirection:row;
        justifyContent: space-between;
        alignItems: center;
    `,
    FooterInfo: styled.View``,
    FooterProfile: styled.Text`
        fontSize: 15px;
        color: #000;
    `,
    FooterUnitText: styled.Text`
        fontSize: 15px;
        color: #666E78;
    `,
    FooterUnitButton: styled.TouchableOpacity``,
    MenuButton: styled.TouchableOpacity`
        flexDirection: row;
        marginBottom: 5px;
        borderRadius: 5px;
        alignItems: center;
    `,
    MenuSquare: styled.View`
        width: 5px;
        height:  35px;
        marginRight: 20px;
        backgroundColor: transparent;
        borderTopRightRadius: 5px;
        borderBottomRightRadius: 5px;
    `,
    MenuButtonText: styled.Text`
        fontSize: 15px;
        marginLeft: 10px;
        color: #666E78;
    `
}