<template>
    {{query}}
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'
const route = useRoute()
const query = computed(() => {
    return route.query
})
</script>
