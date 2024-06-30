<script setup lang="ts">
const { data: count } = await useFetch("https://catfact.ninja/fact");
</script>

<template>
  <p>Page visits: {{ count }}</p>
</template>
