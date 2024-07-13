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
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label
          >Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>
