import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { FirestoreState } from './types';
import { RootState } from '../types';

// initial state for this module
export const state: FirestoreState = {
    value: '',
};

const namespaced: boolean = true;

export const firestore: Module<FirestoreState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
