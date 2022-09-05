import { RouteRecordRaw } from 'vue-router'

const pageModules = import.meta.glob('../pages/**/**/**/**.vue')
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: pageModules['../pages/IndexPage.vue'],
        children: []
    }
]
const pages = []
for (let module in pageModules) {
    pages.push(module.substring(8))
}
const addChildren = (children: any, path: string, routes: any, componentPath: string) => {
    if (children.length > 1) {
        let copy = [...children]
        componentPath = path === '' ? copy[0] : `${path}/${copy[0]}`
        path = copy[0]
        copy.splice(0, 1)
        let child = routes.find((route: any) => route.path === path)
        if (child === undefined) {
            child = {
                path: path,
                children: []
            }
            routes.push(child)
        }
        addChildren(copy, path, child.children, componentPath)
    } else {
        routes.push({
            path: `${children[0].split('.')[0]}`,
            component: pageModules[`../pages/${componentPath === '' ? '' : `${componentPath}/`}${children[0]}`],
        })
    }
}
pages.forEach(page => {
    let split = page.split('/')
    split.splice(0, 1)
    addChildren(split, '', routes[0].children, '')
})
routes.push({
    path: '/:catchAll(.*)*',
    component: pageModules['../pages/ErrorNotFound.vue'],
})
export default routes
