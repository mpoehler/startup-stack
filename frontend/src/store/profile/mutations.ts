import { MutationTree } from 'vuex';
import { ProfileState } from './types';

export const mutations: MutationTree<ProfileState> = {

    // add mutations here (synchronous)
    // setUser(state, payload) {
    //    ...
    // }

    changeName(state, name) {
        if (!state.user) {
            state.user = {
                uid: '1',
                displayName: name,
                email: 'noemail',
            };
        } else {
            state.user.displayName = name;
        }
    },
};
