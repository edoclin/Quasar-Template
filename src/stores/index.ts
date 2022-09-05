import { store } from 'quasar/wrappers'
import { createPinia, mapState } from 'pinia'
import { Router } from 'vue-router'
import { computed, ComputedRef } from 'vue';

/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
    export interface PiniaCustomProperties {
        readonly router: Router;
    }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
    const pinia = createPinia()

    // You can add Pinia plugins here
    // pinia.use(SomePiniaPlugin)

    return pinia
})

type stringKey = Record<string, ComputedRef<any>>
export const useMapState = (store: any, getKeys: any) => {
    const storeState: stringKey = {}
    const storeFns = mapState(store, getKeys)
    Object.keys(storeFns).forEach((fnKeys: string) => {
        const fn = storeFns[fnKeys].bind({ $store: store })
        storeState[fnKeys] = computed(fn)
    })
    return storeState
}
