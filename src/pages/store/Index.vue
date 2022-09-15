<template>
    <div>
        {{ token }}
        {{ userinfo }}
        <el-button @click="test">update token fun</el-button>
        <el-button @click="userActions.updateToken('777')">update token setup</el-button>
    </div>
</template>
<script setup lang="ts">
import { mapActions } from 'pinia';
import { useMapState } from 'src/stores';
import { useUserStore } from 'stores/user_store'

const { token, userinfo } = useMapState(useUserStore, ['token', 'userinfo'])
const userActions = mapActions(useUserStore, ['updateToken', 'updateUserInfo'])
userActions.updateToken("123")


function test() {
    userActions.updateToken("567")
}

</script>

<style scoped>

</style>
