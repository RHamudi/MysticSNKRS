import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import { Login } from '../types/entities';

interface StateLogin {
    apiErro: string,
    authenticateIs: boolean,
    username: string,
}

const INITIAL_STATE: StateLogin = {
    apiErro: '',
    authenticateIs: false,
    username: '',
};

const slice = createSlice({
    name: 'Login',
    initialState: INITIAL_STATE,
    reducers: {
        signin(state, {payload}: PayloadAction<Login>){
            localStorage.setItem('authToken', payload.token);
            localStorage.setItem('userId', payload.id);
            localStorage.setItem('username', payload.username);
            return {...state, username: payload.username};
        },
        logout(state){
            localStorage.clear();
            location.reload();
            return {...state, authenticateIs: false, username: ''};
        },
        setUsername(state, {payload}: PayloadAction<string>){
            return {...state, username: payload};
        },
        authenticate(state, {payload}: PayloadAction<boolean>){
            return {...state, authenticateIs: payload};
        },
        setApiErro(state, {payload}: PayloadAction<string>){
            return {...state, apiErro: payload};
        },
    },
});

export const { signin, logout, authenticate, setApiErro, setUsername} = slice.actions;

export const useStateLogin = (state: any) => {
    return state.login as StateLogin;
};

export default slice.reducer;