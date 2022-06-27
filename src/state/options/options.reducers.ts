import { createReducer } from "@reduxjs/toolkit";

import { setNickname } from './options.actions';

type OptionsProps = {
    nickname: string | null,
}

const initialState: OptionsProps = {
    nickname: null,
}

const optionsReducer = createReducer(initialState, builder => { 
    builder
    .addCase(setNickname, (state,action) => {
        state.nickname = action.payload;
    });
})

export { optionsReducer }