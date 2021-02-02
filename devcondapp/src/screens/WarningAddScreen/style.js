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
    Title: styled.Text`
        fontSize: 17px;
        color: #000;
        margin: 10px 0;
    `,
    Field: styled.TextInput`
        borderWidth: 1px;
        borderColor: #CCC;
        backgroundColor: #FFF;
        borderRadius: 5px;
        color: #000;
        fontSize: 15px;
        padding: 10px;
    `,
    PhotoArea: styled.View`
        marginBottom: 30px;
    `,
    PhotoScroll: styled.ScrollView`
        flex: 1;
    `,
    PhotoAddButton: styled.TouchableOpacity`
        width: 65px;
        height: 65px;
        justifyContent: center;
        alignItems: center;
        borderWidth: 1px;
        borderColor: #CCC;
        borderRadius: 5px;
    `,
    PhotoItem: styled.View`
        width: 65px;
        borderWidth: 1px;
        borderColor: #CCC;
        borderRadius: 5px;
        paddingBottom: 5px;
        marginLeft: 5px;
        alignItems: center;
    `,
    Photo: styled.Image`
        width: 63px;
        height: 63px;
        marginBottom: 5px;
        borderRadius: 5px;
    `,
    PhotoRemoveButton: styled.TouchableOpacity``,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 12px;
        justifyContent: center;
        alignItems: center;
        borderRadius: 5px;
    `,
    ButtonText: styled.Text`
        fontSize: 15px;
        fontWeight: bold;
        color: #FFF;
    `,
    LoadingText: styled.Text`
        fontSize: 15px;
        margin: 10px 0;
    `,
};