import { defineStore } from 'pinia'


interface UserInfo {
    id: number
    name: string
}

export const useUserStore = defineStore('user_store', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userinfo: {} as UserInfo
    }),
    getters: {
    },

    actions: {
        updateToken(token: string) {
            this.token = token
        },
        updateUserInfo(userinfo: UserInfo) {
            this.userinfo = userinfo
        }
    }
})


