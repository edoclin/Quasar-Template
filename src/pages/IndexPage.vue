<template>
    <div>
        <el-button @click="toPage('/router/Index')">route test</el-button>
        <el-button @click="toPage('/store/Index')">store test</el-button>
        <el-button @click="toPage('/request/Index')">request test</el-button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IndexPage',
    mounted() {
        console.log('IndexPage')
    },
    methods: {
        toPage(path: string) {
            this.$router.push({
                path: path
            })
        }
    }
}
)
</script>
