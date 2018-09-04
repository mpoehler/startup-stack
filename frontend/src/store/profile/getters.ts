import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {

    // add getters (aka computed state for the store)
    // fullName(state): string {
    //    return `${sate.displayName}`;
    // },

};
