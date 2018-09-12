import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { profile } from './profile';
import { firestore } from './firestore';
import createEasyFirestore from 'vuex-easy-firestore';

Vue.use(Vuex);

const testDataModule = {
  firestorePath: 'test/data',
  firestoreRefType: 'doc', // 'collection' or 'doc'
  moduleName: 'testData',
  statePropName: '',   // was bedeutet das? -> das ist die Property, mit der das Dokument im Store verlinkt ist.
};

// do the magic 🧙🏻‍♂️
const easyFirestore = createEasyFirestore(testDataModule);

const store: StoreOptions<RootState> = {
  state: {
  },
  mutations: {
  },
  modules: {
    profile,
    firestore,
  },
  plugins: [easyFirestore],
};

export default new Vuex.Store<RootState>(store);

