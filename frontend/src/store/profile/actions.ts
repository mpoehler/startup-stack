import { ActionTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {

    // add actions here like this:
    // payloads can also be typed.
    //  actionname({ commit, rootState }, payload): any {
    //    // usually call a mutation from here
    //    commit('mutationName', payload);
    //  }

    // OR

    //  logout({ commit }): any {
    //  }

    changeName({ commit, rootState }, name): any {
        // here some kind of long-running operations can take place
        commit('changeName', name);
    },
};
