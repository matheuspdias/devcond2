import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        backgroundColor: #F5F6FA;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    HeadTitle: styled.Text`
        fontSize: 16px;
        color: #000;
        textAlign: center;
        marginTop: 10px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        alignItems: center;
    `,
    ExitButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 15px;
        justifyContent: center;
        alignItems: center;
    `,
    ExitButtonText: styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `,
    PropertyList: styled.View`
        margin: 20px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #FFF;
        borderWidth: 2px;
        borderColor: #E8E9ED;
        borderRadius: 20px;
        padding: 15px;
        alignItems: center;
        marginBottom: 10px;
    `,
    ButtonText: styled.Text`
        color: #000;
        fontSize: 15px;
        fontWeight: bold;
    `,
};