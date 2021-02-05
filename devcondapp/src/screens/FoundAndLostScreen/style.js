import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        backgroundColor: #F5F6FA;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
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
        color: #000;
        margin: 10px 20px;
    `,
    ProductScroller: styled.ScrollView`
        width: 100%;
        paddingLeft: 20px;
        marginBottom: 20px;
    `,
};