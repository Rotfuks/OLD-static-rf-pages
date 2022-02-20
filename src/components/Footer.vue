<template>
  <div id="footer">
    <v-footer
      light
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-3 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            :href="icon.href"
            :target="icon.target"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Rotfuks</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RFFooter extends Vue {
  icons = [{
    name: "mdi-account-circle",
    href: "/#/",
    target: "_self"
  },{
    name: "mdi-vuejs",
    href: "/#/aboutpage",
    target: "_self"
  },{
    name: "mdi-format-list-text",
    href: "/#/portfolio",
    target: "_self"
  },{
    name: "mdi-linkedin",
    href: "https://www.linkedin.com/in/dominik-kress-33a540174/",
    target: "_blank"
  }]
}
</script>

<style scoped>
#footer {
  margin-top: 50px;
}
</style>
