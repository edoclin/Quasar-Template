# Quasar Template

A Template Project Based On Quasar with Vite

## Install the dependencies
```bash
yarn --registry https://registry.npm.taobao.org
# or
npm install --registry https://registry.npm.taobao.org
```

### scripts
See [package.json](./package.json)


### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### add boot
**boot files are part of "main.js"**
```bash
quasar new boot file_name
```

### add store
```
quasar new store store_name
```

### Electron打包

1. `⨯ Get "https://github.com/electron/electron/releases/download/v20.1.0/electron-v20.1.0-darwin-arm64.zip": proxyconnect tcp: dial tcp :0: connect: can't assign requested address`

    [配置代理](https://www.electron.build/configuration/configuration), 见[quasar.config.js['electron'].builder.electronDownload配置项](./quasar.config.js)

2. `⨯ Get "https://npm.taobao.org/mirrors/electron/xxx/electron-xxx.zip": proxyconnect tcp: dial tcp :0: connect: can't assign requested address`
    配置代理后仍报错，手动点击链接下载到本地，在`electronDownload`中配置：
    ```json
    electronDownload: {
        cache: 'the directory of your downloaded electron.zip',
        mirror: 'https://npm.taobao.org/mirrors/electron/'
    }
    ```

3. [mac 升级之后 electron 打包报错 Exit code: ENOENT. spawn /usr/bin/python ENOENT](https://www.jianshu.com/p/496d016ddefb)
