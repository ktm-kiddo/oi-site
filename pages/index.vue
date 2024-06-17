<script setup>
const route = useRoute();
</script>

<template>
    <div>
        <h1 class="text-blue-500">Nuxt Routing set up successfully!</h1>
        <p>Current route: {{ route.path }}</p>
        <p>{{ 1 + 1 }}</p>
        <p>{{ route }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    </div>
</template>
