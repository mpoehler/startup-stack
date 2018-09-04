<template>
  <mdc-layout-app id="app">

   <mdc-toolbar slot="toolbar">
     <mdc-toolbar-row>
       <mdc-toolbar-section align-start >
         <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
         <mdc-toolbar-title>Drawer Example</mdc-toolbar-title>
       </mdc-toolbar-section>
     </mdc-toolbar-row>
   </mdc-toolbar>

   <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
     <mdc-drawer-list>
       <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
       <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
       <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
     </mdc-drawer-list>
   </mdc-drawer>

   <main>
     <router-view/>
   </main>
 </mdc-layout-app>

</template>

<style lang="scss">
@import "~normalize.css/normalize.css";

$mdc-theme-primary: #212121;
$mdc-theme-accent: #41b883;
$mdc-theme-background: #fff;

@import 'vue-mdc-adapter/dist/styles';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';

Vue.use(VueMDCAdapter);

export default Vue.extend({
});
</script>
