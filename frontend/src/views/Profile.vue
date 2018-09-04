<template>
  <div class="profile">
    <h1>profile.user.dispayName Data from store: {{profile.user && profile.user.displayName}}</h1>
    Input for local property: <input v-model="name" placeholder="edit me" @change="nameChanged">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { ProfileState, User } from '../store/profile/types';

const namespace: string = 'profile';

@Component
export default class ProfileView extends Vue {

  @State('profile')
  protected profile?: ProfileState;

  @Action('changeName', { namespace })
  protected changeName: any;

  protected name: string|null = null;

  protected nameChanged(event: any) {
    // when input is changed, call an action that operates on the store
    this.changeName(this.name);
  }
}
</script>