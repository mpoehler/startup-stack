import { ActionTree } from 'vuex';
import { FirestoreState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<FirestoreState, RootState> = {

    // add actions here like this:
    // payloads can also be typed.
    //  actionname({ commit, rootState }, payload): any {
    //    // usually call a mutation from here
    //    commit('mutationName', payload);
    //  }

    // OR

    //  logout({ commit }): any {
    //  }

    changeValue({ commit, rootState }, value): any {
        // TODO update value in firestore

        // commit changed value to the local store
        commit('changeValue', value);
    },
};
