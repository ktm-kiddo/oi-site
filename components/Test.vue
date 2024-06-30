<template>
  <div>
    {{ catFact }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const catFact = ref("");

fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    catFact.value = data.fact;
  });
</script>
