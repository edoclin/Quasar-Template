import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'
import { useUserStore } from 'src/stores/user_store';

const userStore = useUserStore()
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
    baseURL: 'https://wechat.wuhandonghumap.com/zigui'
})

// 添加请求拦截器
api.interceptors.request.use(config => {
    config.headers['token'] = userStore.token

    // 在发送请求之前做些什么

    console.log(`headers['token']=${config.headers['token']}`);

    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
}, error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export const GET = (url: string, params: {}) => {
    return new Promise((resolve, reject) => {
        api.get(url, { params }
        ).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const POST = (url: string, params: {}) => {
    return new Promise((resolve, reject) => {
        api.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const PUT = (url: string, params: {}) => {
    return new Promise((resolve, reject) => {
        api.put(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const DELETE = (url: string, params: {}) => {
    return new Promise((resolve, reject) => {
        api.delete(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API
})

export { api }
