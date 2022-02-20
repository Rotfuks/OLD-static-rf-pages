<template>
  <v-app>
    <v-main>
      <RFNavbar/>
      <router-view/>
      <RFFooter/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RFNavbar from '@/components/Navbar.vue'
import RFFooter from '@/components/Footer.vue'

@Component({
  components: {
    RFFooter,
    RFNavbar
  }
})
export default class App extends Vue {}
</script>
<style>
a {
  color: #F4511E!important;
}
a:hover{
  color: #777!important;
}
</style>
