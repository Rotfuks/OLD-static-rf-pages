<template>
  <v-container id="aboutpage">
    <v-row>
      <v-col>
        <br>
        <span class="text-h4">
          <v-icon class="text-h4">mdi-vuejs</v-icon>
          About this Page
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="text-center">
        <v-img src="@/assets/vue.png" class="content-image rounded-circle"/>
      </v-col>
      <v-col cols="12" sm="6" class="content-text text-body-1">
        This Website is a Vue.js (Vue 3) based Single Page Application (in PWA mode) written in TypeScript. 
        <br><br> 
        Additionally Vuetifys Material Design Components are powering the looks of this page. 
      </v-col>
    </v-row>
    <v-row>
      <v-col class="content-text text-body-1">
        All Data that you see here is (still static). Every adaption in the text is a code change that is pushed to a private GitHub Repo and directly published via GitHub Actions Scripts.
        <br>
        I am currently working on a Content Management System to be able to maintain the pages, navigation and content of the pages in a more dynamic way then updating the code.
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="content-text text-body-1">
        The future Rotfuks Pages Stack will then be:
        <ul>
          <li>TypeScript as main Language</li>
          <li>Vue.js as Frontend SPA Framework</li>
          <li>GraphQL (with Apollo) as API Server</li>
          <li>Express.js as an OAuth-Server</li>
          <li>MongoDB Atlas for the persistence layer</li>
          <li>Docker for containerization of the apps</li>
          <li>Github Actions for the Continuous Delivery</li>
          <li>And sure some things more along the way :)</li>
        </ul>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <v-img src="@/assets/project.jpg" class="content-image rounded-lg"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="content-text text-body-1">
        The progress of the multiple Services for the future Rotfuks-Pages and -CMS is tracked 
        in a <a href="https://github.com/Rotfuks/RotfuksCMS/projects/1">Github project</a> 
        related to the <a href="https://github.com/Rotfuks/RotfuksCMS">RotfuksCMS Repository</a>. 
        You can checkout both by following the links.
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class AboutPage extends Vue {}
</script>

<style scoped>
.content-image {
  max-width: 400px;
}
.content-text {
  margin: auto;
}
</style>
