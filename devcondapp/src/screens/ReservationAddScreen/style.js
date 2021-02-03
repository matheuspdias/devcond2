import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        backgroundColor: #F5F6FA;
    `,
    Scroller: styled.ScrollView`
        flex:1;
    `,    
    CoverImage: styled.Image`
        height: 150px;
    `,
    LoadingIcon: styled.ActivityIndicator`
        marginTop: 20px;
    `,
    CalendarArea: styled.View`
        margin: 20px;
    `,
    Title: styled.Text`
        color: #000;
        fontSize: 17px;
        fontWeight: bold;
        margin: 10px 20px; 
    `,
    TimeListArea: styled.View`
        flexDirection: row;
        flexWrap: wrap;
        justifyContent: space-around;
        marginBottom: 30px;
    `,
    TimeItem: styled.TouchableOpacity`
        borderWidth: 1px;
        borderColor: #CCC;
        borderRadius: 5px;
        margin: 5px 20px;
        backgroundColor: ${props=>props.active ? '#8863E6':'transparent'};        
        padding: 10px;
    `,
    TimeItemText: styled.Text`
        color: ${props=>props.active ? '#FFF':'#000'};
        fontSize: 14px;
    `,
    ButtonArea: styled.TouchableOpacity`
        backgroundColor: #8863E6;
        padding: 15px;
        justifyContent: center;
        alignItems: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        fontSize: 15px;
        fontWeight: bold;
    `
};