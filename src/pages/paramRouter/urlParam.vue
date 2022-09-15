<template>
    {{query}}
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'
const route = useRoute()

// url参数 eg：urlParam?a=1&b=2
const query = computed(() => {
    return route.query
})
</script>
