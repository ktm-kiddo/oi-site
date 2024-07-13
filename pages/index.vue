<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <HomeComponentsHero></HomeComponentsHero>
    <HomeComponentsFeature></HomeComponentsFeature>
    <HomeComponentsBlog></HomeComponentsBlog>
    <HomeComponentsFeatureThree></HomeComponentsFeatureThree>
    <HomeComponentsFeatureTwo></HomeComponentsFeatureTwo>
    <Footer></Footer>

    <!-- <h1 class="text-oi-blue">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <p>{{ 1 + 1 }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    > -->
    <form netlify>
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="John" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
