<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar()
$q.localStorage.set('token', "test token")
</script>
