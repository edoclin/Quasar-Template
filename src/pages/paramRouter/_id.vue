<template>
    {{routeId}}
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'
const route = useRoute()

// 路径参数 eg：paramRouter/id/1 => routeId=1
// 需要路径参数的页面以文件名 ‘_’开头，路由会去除开头的 ‘_’
const routeId = computed(() => {
    return route.params.id
})
</script>
