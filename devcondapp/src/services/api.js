import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://api.b7web.com.br/devcond/api';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type': 'application/json'};
    if(token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl , { method, headers, body });
    let json = await req.json();
    return json;
}

export default {
    getToken: async () => {
        return await AsyncStorage.getItem('token');
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/validate', {}, token);
        return json;
    },
    login: async (cpf, password) => {
        let json = await request('post', '/auth/login', {cpf, password});
        return json;
    },
    logout: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/logout', {}, token);
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('property');
        return json;
    },
    register: async (name, email, cpf, password, password_confirm) => {
        let json = await request('post', '/auth/register', {
            name, email, cpf, password, password_confirm
        });
        return json;
    },
    getWall: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/walls', {}, token);
        return json;
    },
    likeWallPost: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', `/wall/${id}/like`, {}, token);
        return json;
    },
    getDocs: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/docs', {}, token);
        return json;
    }
};