import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(()=> {
        navigation.setOptions({
            headerTitle: 'Fazer Cadastro'
        })
    }, [])

    const handleRegisterButton = async () => {
        if(name && email && cpf && password && passwordConfirm) {
            let result = await api.register(name, email, cpf, password, passwordConfirm)
            if(result.error === '') {
                dispatch({type: 'setToken',payload:{ token: result.token}});
                dispatch({type: 'setUser',payload: {user: result.user}});

                navigation.reset({
                    index: 1,
                    routes:[{name: 'ChoosePropertyScreen'}]
                });
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    return (
        <C.Container>     
             <C.Field
             placeholder="Digite seu Nome Completo"
             value={name}
             onChangeText={t=>setName(t)}
             />       
            <C.Field
             placeholder="Digite seu CPF" 
             keyboardType="numeric"
             value={cpf}
             onChangeText={t=>setCpf(t)}
             />
             <C.Field
             placeholder="Digite Seu E-Mail"
             value={email}
             onChangeText={t=>setEmail(t)}
             /> 
             <C.Field
             placeholder="Digite sua Senha" 
             secureTextEntry={true}
             value={password}
             onChangeText={t=>setPassword(t)}
             />
             <C.Field
             placeholder="Digite sua Senha novamente" 
             secureTextEntry={true}
             value={passwordConfirm}
             onChangeText={t=>setPasswordConfirm(t)}
             />

             <C.ButtonArea onPress={handleRegisterButton}>
                 <C.ButtonText>CADASTRAR-SE</C.ButtonText>
             </C.ButtonArea>
        </C.Container>
    );
}