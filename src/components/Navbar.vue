<template>
  <div id="navbar">
    <v-app-bar
      color="grey lighten-5"
      light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        Rotfuks - Dominik Kress
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <img src="@/assets/logo.png" class="logo"/>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="grey--text text--darken-1"
        >
          <v-list-item 
            v-for="navitem in navitems"
            :key="navitem.text"
            :href="navitem.href"
            :target="navitem.target">
            <v-list-item-icon>
              <v-icon>{{ navitem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ navitem.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RFNavbar extends Vue {
  drawer = false;
  navitems = [{
    icon: "mdi-account-circle",
    text: "About Me",
    href: "/#/",
    target: "_self"
  },{
    icon: "mdi-vuejs",
    text: "About This Page",
    href: "/#/aboutpage",
    target: "_self"
  },{
    icon: "mdi-format-list-text",
    text: "Portfolio",
    href: "/#/portfolio",
    target: "_self"
  },{
    icon: "mdi-linkedin",
    text: "Me On LinkedIn",
    href: "https://www.linkedin.com/in/dominik-kress-33a540174/",
    target: "_blank"
  }

  ]
}
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>
