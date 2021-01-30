import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        backgroundColor: #F5F6FA;
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
    List: styled.FlatList`
        flex: 1;
    `,
    AddButton: styled.TouchableOpacity`
        marginRight: 15px;
    `
};