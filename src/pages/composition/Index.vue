<script setup lang="ts">
import { reactive } from 'vue';



const data = reactive({
    content: "hello"
})

</script>
<template>
    {{ data.content }}
</template>
