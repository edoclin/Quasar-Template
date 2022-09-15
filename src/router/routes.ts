import { template } from 'lodash'
import { RouteRecordRaw } from 'vue-router'

// 递归读取pages下的vue文件注册到路由，无需手动添加router
// '../pages/**/**/**/**.vue' : 支持读取到pages下第四级目录
// If 有更高的嵌套需求: eg五级：'../pages/**/**/**/**/**.vue'
const pageModules = import.meta.glob('../pages/**/**/**/**.vue')
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: pageModules['../pages/IndexPage.vue'],
        children: [] as RouteRecordRaw[]
    }
]

const pages = []
for (let module in pageModules) {
    pages.push(module.substring(8))
}
const addChildren = (children: string[], path: string, routes: any, componentPath: string) => {
    if (children.length > 1) {
        let copy = [...children]
        componentPath = path === '' ? copy[0] : `${path}/${copy[0]}`
        path = copy[0]
        copy.splice(0, 1)
        let child = routes.find((route: any) => route.path === path)
        if (child === undefined) {
            child = {
                path: path,
                children: [] as RouteRecordRaw[]
            }
            routes.push(child)
        }
        addChildren(copy, path, child.children, componentPath)
    } else {
        let tmpPath = `${children[0].split('.')[0]}`

        if (tmpPath.startsWith('_')) {
            tmpPath = tmpPath.substring(1)
            tmpPath = `${tmpPath}/:${tmpPath.toLowerCase()}`
        }
        routes.push({
            path: tmpPath,
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
