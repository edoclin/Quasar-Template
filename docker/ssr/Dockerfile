FROM node:slim

LABEL MAINTAINER="edoclin"

RUN mkdir -p /dist/ssr

#进入到app目录下面，类似cd
WORKDIR /dist/ssr

#移动当前目录下面的文件到app目录下
COPY ./dist /dist/ssr

RUN cd /dist/ssr
RUN chmod -R 777 *

#安装依赖
RUN yarn install --registry https://registry.npm.taobao.org

#对外暴露的端口
EXPOSE 3000

#程序启动脚本
CMD ["sh", "-c", "yarn run 'start'"]
