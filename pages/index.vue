<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <Test></Test>
    <HomeComponentsHero></HomeComponentsHero>
    <HomeComponentsFeature></HomeComponentsFeature>
    <HomeComponentsBlog></HomeComponentsBlog>
    <HomeComponentsFeatureThree></HomeComponentsFeatureThree>
    <HomeComponentsFeatureTwo></HomeComponentsFeatureTwo>
    <HomeComponentsFooter></HomeComponentsFooter>

    <!-- <h1 class="text-oi-blue">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <p>{{ 1 + 1 }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    > -->
  </div>
</template>
