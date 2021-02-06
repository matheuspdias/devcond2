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
    PhotoArea: styled.View``,
    Title: styled.Text`
        fontSize: 17px;
        color: #000;
        margin: 10px 0;
    `,
    Field: styled.TextInput`
        backgroundColor: #FFF;
        borderWidth: 1px;
        borderColor: #CCC;
        padding: 10px;
        color: #000;
        marginBottom: 15px;
        fontSize: 15px;
        borderRadius: 5px;
    `,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        justifyContent: center;
        alignItems: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        fontWeight: bold;
        fontSize: 15px;
    `,
    PhotoItem: styled.Image`
        height: 200px;
        borderRadius: 5px;
        marginBottom: 10px;
    `,
};