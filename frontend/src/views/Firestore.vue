<template>
    <div>
        <h1>Wert: {{value}}</h1>
        <input type="text" v-model="newvalue"/>
        <button @click="change">Update</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import { FirestoreState } from '../store/firestore/types';

const demoModule = namespace('testData');

@Component
export default class FirestoreView extends Vue {

    @demoModule.State((state) => state.test)
    protected value?: string;

    @demoModule.Action('set')
    protected changeValue: any;

    /**
     * component local state, used to store the data
     */
    protected newvalue: string|null = null;

    protected change() {
        this.changeValue({test: this.newvalue});
    }
}
</script>
