<template>
  <div id="aboutme">
    <v-container>
      <v-row>
        <v-col>
          <br>
          <span class="text-h4">
            <v-icon class="text-h4">mdi-format-list-text</v-icon>
            Portfolio
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <img src="@/assets/graphql.jpg" class="content-image rounded-lg"/>
        </v-col>
        <v-col cols="12" md="6" class="content-text text-body-1">
          Hey there!
          <br><br>
          This is a short insight into things I did in the past. 
          <br><br>
          This is not the complete and extensive list of all the things I ever did, but should only give a small overview over different
          areas I am active in and show some examples of the things I did in these areas. 
          <br>
          If you want to know more about the listed things or things, I did not list here, don't hesitate to get in touch with me!
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list>
            <template v-for="(item, index) in items">
            <v-subheader
              class="text-h5"
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-content>
                <div class="text-primary" v-html="item.title"></div>
                <div v-html="item.subtitle"></div>
              </v-list-item-content>
            </v-list-item>
          </template>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class AboutMe extends Vue {
   items = [
        { header: "Publications" },
        { divider: true, inset: true },
        {
          title: '<b>GraphQL – Eine Einführung in APIs mit GraphQL</b>',
          subtitle: `2020, dpunkt.verlag, <a href="https://dpunkt.de/produkt/graphql/">get it here</a>.`,
        },
        {
          title: '<b>Maximizing Value with Kubernetes-as-a-Product</b> - Scaling the Mountain of Possibilities',
          subtitle: `2023, VMBlog, <a href="https://vmblog.com/archive/2023/10/10/maximizing-value-with-kubernetes-as-a-product-scaling-the-mountain-of-possibilities.aspx">read it here</a>`,
        },
        {
          title: '<b>Einstieg in GitHub Actions</b> - 3 part tutorial series on CI/CD with GitHub Actions',
          subtitle: `Part 1, Einstieg in GitHub Actions: 2022, iX Ausgabe 7.2022, <a href="https://shop.heise.de/ix-07-2022/Print">get the magazine</a> 
                          or <a href="https://www.heise.de/ratgeber/Softwareentwicklung-Einstieg-in-GitHub-Actions-7148260.html">on heise+</a>.
                    <br/>Part 2, GitHub Actions und Container-Registries: 2022, iX Ausgabe 8.2022. <a href="https://shop.heise.de/ix-08-2022/Print">get the magazine</a> 
                          or <a href="https://www.heise.de/ratgeber/Wie-Sie-Container-mit-GitHub-Actions-automatisiert-publizieren-7184373.html">on heise+</a>.
                    <br/>Part 3, Cloud Deployment mit GitHub Actions: 2022, iX Ausgabe 9.2022. <a href="https://shop.heise.de/ix-09-2022/Print">get the magazine</a>
                          or <a href="https://www.heise.de/ratgeber/So-funktioniert-Cloud-Deployment-mit-GitHub-Actions-7244444.html">on heise+</a>`,
        },
        {
          title: '<b>Die Cloud hat viele Gesichter</b> - Cloud Foundry: Eine Open-Source-Cloud-Plattfrom als einfache Alternative zu Kubernetes',
          subtitle: `2022, JavaMagazin Ausgabe 2.2022, <a href="https://entwickler.de/magazine-ebooks/java-magazin/java-magazin-22022">read it here</a>.
                    <br/>2022, Windows.developer Magazin Ausgabe 4.2022. <a href="https://entwickler.de/magazine-ebooks/windows-developer/windows-developer-42022">read it here</a>`,
        },
        {
          title: '<b>The Future of Cloud is Abstraction</b>',
          subtitle: `2022, SIT Techblog Article, <a href="https://techblog.schwarz/posts/the-future-of-the-cloud-is-abstraction/">read it here</a>.`,
        },
        {
          title: '<b>Vom Entwickler zum Produkt Owner</b> - Der Produktwerker Podcast',
          subtitle: `2021, Guest on the Product Werker Podcast, <a href="https://produktwerker.de/vom-entwickler-zum-produkt-owner/">listen to it here</a>.`,
        },
        {
          title: '<b>GraphQL als API-Gateway</b> - 2 part tutorial series on API-Gateways with GraphQL“',
          subtitle: `Part 1: Grundlagen, Theorie, Design. 2021, heise.de, <a href="https://www.heise.de/hintergrund/GraphQL-als-API-Gateway-Teil-1-Grundlagen-Theorie-Design-6049124.html">read it here</a>.
                    <br/>Part 2: Technische Beispielimplementierung. 2021, heise.de, <a href="https://www.heise.de/hintergrund/GraphQL-als-API-Gateway-Teil-2-Technische-Beispielimplementierung-6063845.html">read it here</a>.`,
        },
        {
          title: '<b>Why do so many companies have a hard time getting new IT Specialists?</b>',
          subtitle: `2021, Medium Blog Article, <a href="https://rotfuks.medium.com/why-do-so-many-companies-have-a-hard-time-getting-new-it-specialists-31af77e8622">read it here</a>.`,
        },
        { divider: true, inset: true },
        { header: "Events / Talks" },
        { divider: true, inset: true },
        {
          title: 'Infrastruktur als Produkt: Transparenter Wert selbst in komplexesten Umgebungen',
          subtitle: `2024, Product Owner Days Cologne, <a href="https://product-owner-day.de/veranstaltung-21568-0-infrastruktur-als-produkt-transparenter-wert-selbst-in-komplexesten-umgebungen.html">find out more here</a>.`,
        },
        {
          title: 'Product Journey Value Mapping: Paving the Way for Continuous Value Delivery',
          subtitle: `2023, DLSummit Cologne, <a href="https://www.digitale-leute.de/summit/23/schedule/product-journey-value-mapping-paving-the-way-for-continuous-value-delivery/#start">find out more here</a>.`,
        },
        {
          title: 'The Future of Cloud is Abstraction - Why Kubernetes is not the Endgame for STACKIT',
          subtitle: `2022, DevOpsCon Berlin, <a href="https://devopscon.io/cloud-platforms-serverless/the-future-of-cloud-is-abstraction-why-kubernetes-is-not-the-endgame-for-stackit/">find out more here</a>.
                    <br/>2022, WeAreDevelopers Berlin, <a href="https://www.youtube.com/watch?v=5Lp5CPG4GlA">find the talk here</a>`,
        },
        {
          title: 'CD2CF – Continuous Deployment to Cloud Foundry',
          subtitle: `2021, DevOpsCon Berlin, <a href="https://devopscon.io/speaker/dominik-kress/">find out more here</a>.`,
        },
        {
          title: 'Inside AppCloud - In 5 minutes to the cloud',
          subtitle: `2021, SIT MeetUp, <a href="https://www.youtube.com/watch?v=6pijlM0nzYY">watch it here</a>.`,
        },
        {
          title: 'GraphQL as an API Gateway',
          subtitle: `2021, GraphQL Berlin Meetup #24, <a href="https://www.youtube.com/watch?v=8Udo0pV470M">watch it here</a>.`,
        },
        {
          title: 'Micro Frontends: When Microservices are not enough',
          subtitle: `2018, WJAX, <a href="https://jax.de/speaker/dominik-kress/">find out more here</a>.`,
        },
        {
          title: 'Vue.js mit TypeScript',
          subtitle: `2018, Vue.js MeetUp Stuttgart #1, <a href="https://www.meetup.com/de-DE/Stuttgart-Vue-js-Meetup/events/256448251">find out more here</a>.`,
        },
        { divider: true, inset: true },
        { header: "Coding Stuff" },
        { divider: true, inset: true },
        {
          title: 'I have various coding projects that never really want to end, like the CMS for this Website.',
          subtitle: `Since I like to code in various languages and Frameworks there are also many "Just Testing out" and "Proof of Concept" Projects. 
          <br>You can check out my <a href="https://github.com/Rotfuks?tab=repositories">GitHub Repository</a> for various codebases.`,
        },
      ]
}
</script>

<style scoped>
.content-image {
  max-height: 300px;
  max-width: 90vw;
}
.content-text {
  margin: auto;
}
</style>
