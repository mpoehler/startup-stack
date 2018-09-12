import { MutationTree } from 'vuex';
import { FirestoreState } from './types';

export const mutations: MutationTree<FirestoreState> = {

    // add mutations here (synchronous)
    // setUser(state, payload) {
    //    ...
    // }

    changeValue(state, newvalue) {
        state.value = newvalue;
    },
};
