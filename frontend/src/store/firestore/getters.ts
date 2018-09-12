import { GetterTree } from 'vuex';
import { FirestoreState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<FirestoreState, RootState> = {

    // add getters (aka computed state for the store)
    // fullName(state): string {
    //    return `${sate.displayName}`;
    // },

};
