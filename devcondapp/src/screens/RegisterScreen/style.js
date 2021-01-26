import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        padding: 20px;
        backgroundColor: #F5F6FA;
    `,
    Field: styled.TextInput`
        borderWidth: 1px;
        borderColor: #CCC;
        backgroundColor: #FFF;
        borderRadius: 5px;
        color: #000;
        fontSize: 15px;
        padding: 10px;
        marginBottom: 15px;
    `,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        justifyContent: center;
        alignItems: center;
        borderRadius: 5px;
        marginBottom: 15px;        
    `,
    ButtonText: styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `
};