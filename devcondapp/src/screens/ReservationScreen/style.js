import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        backgroundColor: #F5F6FA;
    `,
    Scroller: styled.ScrollView`
        flex:1;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        justifyContent: center;
        alignItems: center;
        padding: 30px;
    `,
    NoListText: styled.Text`
        fontSize: 15px;
        color: #000;
    `,
    Title: styled.Text`
        fontSize: 17px;
        margin: 10px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        borderRadius: 10px;
        justifyContent: center;
        alignItems: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `
};