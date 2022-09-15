<template>
    {{routeId}}
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params);
const routeId = computed(() => {
    return route.params.id
})
</script>
