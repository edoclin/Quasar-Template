<script setup lang="ts">
import { TEST } from 'src/api/test';

const test = () => {
    TEST().then(data => {
        console.log(data);
    })
}
</script>
<template>
    <div>
        <el-button @click="test">
            TEST
        </el-button>
    </div>
</template>

