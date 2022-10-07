import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        modalOpen: false,
        showAlert: false,
    },
    reducers: {
        onToggleModal: ( state ) => {
            state.modalOpen = !state.modalOpen;
        },
        onToggleAlert: ( state ) => {
            state.showAlert = !state.showAlert;
        }
    }
});

export const { onToggleModal, onToggleAlert } = uiSlice.actions;