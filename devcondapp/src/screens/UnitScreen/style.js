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
    TitleArea: styled.View`
        flexDirection: row;
        padding: 10px;
    `,
    Title: styled.Text`
        fontSize: 17px;
        color: #000;
        flex: 1;
    `,
    TitleAddButton: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
    `,
    ListArea: styled.View`
        marginBottom: 20px;
    `,
    ModalArea: styled.Modal``,
    ModalBg: styled.View`
        flex: 1;
        backgroundColor: rgba(0, 0, 0, 0.5);
    `,
    ModalBody: styled.ScrollView`
        backgroundColor: #FFF;
        margin:20px;
    `,
};