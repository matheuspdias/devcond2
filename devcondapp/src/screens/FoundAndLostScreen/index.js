import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import LostItem from '../../components/LostItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [lostList, setLostList] = useState([]);
    const [recoveredList, setRecoveredList] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Achados e Perdidos'
        });
        getFoundAndLost();
    }, []);

    const getFoundAndLost = async () => {
        setLostList([]);
        setRecoveredList([]);
        setLoading(true);
        const result = await api.getFoundAndLost();
        setLoading(false);
        if(result.error === '') {
            setLostList(result.lost);
            setRecoveredList(result.recovered);
        } else {
            alert (result.error);
        }
    }

    return (
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon color="#8B63E7" size="large" />
                }
                {!loading && lostList.length === 0 && recoveredList.length === 0 &&
                    <C.NoListArea>
                        <C.NoListText>Não há itens perdidos ou recuperados.</C.NoListText>
                    </C.NoListArea>
                }         

                {!loading && lostList.length > 0 &&
                    <>
                        <C.Title>Itens Perdidos</C.Title>
                        <C.ProductScroller horizontal showsHorizontalScrollIndicator={false}>
                            {lostList.map((item, index)=> (
                                <LostItem 
                                    key={index}
                                    data={item}
                                    showButton={true}
                                    refreshFunction={getFoundAndLost}
                                />
                            ))}
                        </C.ProductScroller>
                    </>
                }   

                {!loading && recoveredList.length > 0 &&
                    <>
                        <C.Title>Itens Recuperados</C.Title>
                        <C.ProductScroller horizontal showsHorizontalScrollIndicator={false}>
                            {recoveredList.map((item, index)=> (
                                <LostItem 
                                    key={index}
                                    data={item}
                                    showButton={false}
                                />
                            ))} 
                        </C.ProductScroller>
                    </>
                }  
            </C.Scroller>
        </C.Container>
    );
}