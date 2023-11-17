<template>
  <div id="aboutme">
    <v-container>
      <v-row>
        <v-col>
          <br>
          <span class="text-h4">
            <v-icon class="text-h4">mdi-account-circle-outline</v-icon>
            About Me
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" class="text-center">
          <img src="@/assets/me.jpg" class="content-image rounded-lg"/>
        </v-col>
        <v-col cols="12" lg="6" class="content-text text-body-1">
          Hey there! 
          <br><br>
          My name is Dominik. <br>
          I am passionate about Software Engineering, DevOps, Cloud, Agile Methods, People, Networking, 
          improving lifes, sustainability, good food, football, electric guitars, history and much more.
          <br><br>
          Want to know more? Alright then, here is my CV. Get in touch if you want to know something specific. 
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
        { header: 'Practical Experience' },
        {
          title: 'Since 10/2022 <b>Product Manager Kubernetes Platform</b>',
          subtitle: `<i>Giant Swarm GmbH</i>
          <br>My first mission in Giant Swarm was to extend the supported Infrastructure Providers for our Platform Product with the Azure Cloud. 
          Afterwards I took over the responsibility to streamline our Kubernetes Platform and the cross provider apps and components to deliver 
          the best possible experience for our internal and external users. To manage such a highly complex and abstract product that is strongly 
          integrated to all other teams and make your roadmap, value and progress transparent for all stakeholders was quite a challenge. 
          Besides that I had the chance to participate in and help shape many internal communities of practice around various topics like 
          Product Management, Product Marketing, Revenue, Events and more.`,
        },
        {
          title: '02/2021 - 09/2022 <b>Technical Product Owner STACKIT AppCloud</b>',
          subtitle: `<i>Schwarz IT KG</i>
          <br>As Technical Product Owner I was responsible for the STACKIT AppCloud – a Cloud Foundry 
          based Application Runtime in Schwarz ITs Cloud Initiative. Getting into the technical
          intricacies of this highly complex platform and having just a small team of Engineers, but a
          lot of toil and technical debt, as well as helping to introduce structured agile processes and a
          common understanding of product ownership across the multiple Teams working with us
          were just some of the many challenges I faced in this position.`,
        },
        { divider: true, inset: true },
        {
          title: '04/2019 – 02/2021 <b>DevLead Mindshift CMS – Lidl Online Shop</b>',
          subtitle: `<i>Schwarz IT KG</i>
          <br>In the Role as DevLead of the Mindshift CMS Team I was responsible for creating technical
          concepts, discussing dependencies with other teams and in general all technical topics
          around the Content Management System and its Development Team. Enabling my team to
          become cross-functional and build up a successful DevOps-Mindset, as well as reducing our
          technical debt to nearly zero because of our fast delivery speed were just some of my proud
          moments I had in this position.`,
        },
        { divider: true, inset: true },
        {
          title: '02/2018 – 03/2019 <b>Software Engineer Lidl Online Shop</b>',
          subtitle: `<i>Schwarz IT KG / Lidl Digital International GmbH & Co.KG</i><br>
          In the Role as Software Engineer at the Lidl Online Shop I helped build up a new Lidl Online
          Shop Platform based on a Micro-Frontend Architecture and mostly Open-Source technology
          like Vue.js, SpringBoot and various other Frameworks, Tools and Languages. With the
          introduction of the Product Organization with highly enabled Teams - even though we were
          mostly juniors - we were given the opportunity to have a lot of impact on the architecture
          and organization of the new Shop Platform. Helping to create communities across those
          various teams and resolve the challenge of integrating the multiple Backend-Services and
          Frontend-Components to a seamless User-Experience in the Shop were just some of the
          noteworthy experiences in this position.`,
        },
        { divider: true, inset: true },
        {
          title: '12/2017 – 01/2018 <b>Software Engineer Kaufland Online Shop</b>',
          subtitle: `<i>Kaufland Informationssysteme GmbH & Co.KG</i><br>
          Working full-time as a Software Developer for the Kaufland Online Shop I was already
          working for as a working student was only a brief pleasure. The Online Shop got shut down
          shortly before even my first day began. But the experience of how to end and archive such a
          big project was very interesting.`,
        },
        { divider: true, inset: true },
        {
          title: '2015 – 2017 <b>Working Student: Software Engineer</b>',
          subtitle: `<i>Kaufland Informationssysteme GmbH & Co.KG</i><br>
          As a working Student at the Kaufland Online Shop – an eFood Concept Shop of the Schwarz
          Group – I had various opportunities to contribute: From building up a Suite of automated
          Fronted Tests with Cucumber and Selenium, to creating business monitoring Dashboards
          and Alerting based on Splunk and Grafana that were relevant for the C-Level-Management,
          to finally finding my place introducing Single-Page-Application Components into the
          Frontend of the SAP Hybris based Online Shop. `,
        },
        { divider: true, inset: true },
        {
          title: '2012 – 2015 Working Student as Teamlead – Cinemaxx Heilbronn (Cinema)',
          subtitle: ``,
        },
        { header: 'Education' },
        {
          title: '2017 <b>Bachelor of Science – Software Engineering</b>',
          subtitle: `Thesis Title: Grundlagen der API - Von der Konzeption bis zur technischen Umsetzung und Wartung
          <br/>API Fundamentals – from conception to technical implementation and maintenance
          <br/><b>Heilbronn University</b>`,
        },
        { divider: true, inset: true },
        {
          title: '2014 – 2017 <b>Software Engineering</b>',
          subtitle: `<b>Heilbronn University</b>`,
        },
        { divider: true, inset: true }
        ,
        {
          title: '2011 – 2014 <b>Medical Informatics</b>',
          subtitle: `<b>Heilbronn University/Ruprecht-Karls-University Heidelberg</b>`,
        },
        { header: 'Other' },
        {
          title: 'Other Experiences include',
          subtitle: `          
          <ul>
            <li> Love to actively contribute to the community
              <ul>
                <li>Speaker on conferences and MeetUps like <a href="https://jax.de/speaker/dominik-kress/">WJAX 2018</a>, 
                  <a href="https://devopscon.io/speaker/dominik-kress/">DevOpsCon 2021 and 2022</a>, 
                  <a href="https://www.youtube.com/watch?v=5Lp5CPG4GlA">WeAreDevelopers 2022</a>, 
                  <a href="https://www.digitale-leute.de/summit/23/schedule/product-journey-value-mapping-paving-the-way-for-continuous-value-delivery/#start">Digitale Leute Summit 2023</a>, 
                  <a href="https://product-owner-day.de/veranstaltung-21568-0-infrastruktur-als-produkt-transparenter-wert-selbst-in-komplexesten-umgebungen.html">Product Owner Days 2024</a>, 
                  and more</li>
                <li>Wrote multiple Blog and Magazine Articles about various topics around Platforms, Cloud and APIs 
                  and a book about <a href="https://dpunkt.de/produkt/graphql/">API Design with GraphQL (ISDN: 978-3-86490-784-5)</a></li>
                <li>Actively contributing to the Cloud Native Computing Foundation, for example in the <a href="https://tag-app-delivery.cncf.io/wgs/platforms/">Platforms Working Group</a></li>
                <li>Created the concept of and organised two conference formats with the <a href="https://www.hs-heilbronn.de/meetit">MeetIT Heilbronn</a> and Schwarz IT internal Developer Conference SITCon</li>
              </ul>
            </li>
            <li>2019-2020 Lecturer for fundamentals of software engineering at Heilbronn University</li>
            <li>2019-2021 Culture- and Change Agent for Schwarz IT, actively supporting the enterprise-wide organisational and cultural changes.</li>
            <li>2018-2019 Board Member of the IT Networking Club connect.it Heilbronn</li>
            <li>2015-2017 Head of the Students Representation of the Faculty IT at Heilbronn University</li>
            <li>2016-2019 Supporter in a “Start-Up Workshop” organised by Students for Students; there I helped multiple IT Start-Ups understand agile tools, shape their (app-)ideas to feasible products, scale from few founders with an idea to multiple teams and more.</li>
          </ul>`,
        },

      ]
}
</script>

<style scoped>
.content-image {
  max-height: 400px;
  max-width: 400px;
}
.content-text {
  margin: auto;
}
</style>
