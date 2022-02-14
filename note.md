

```sh
// pre-jh-web
svn up --username=saas --password=P8isj78HJfv2226Vs --no-auth-cache
echo $PATH
if [ ! -d node_modules  ];then
	npm config set registry https://registry.npm.taobao.org
	npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass
	npm install
elif [ $isInstall == "true" ];then
    npm config set registry https://registry.npm.taobao.org
	npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass
	npm install
fi

npm run build pospre_new
cd dist
rm -rf dist.zip
zip -r dist.zip ./*

ansible 172.20.34.111 -m copy -a "src=${WORKSPACE}/dist/dist.zip dest=/usr/local/saasapp/apps/web/jh-web"
ansible 172.20.34.111 -m shell -a "cd  /usr/local/saasapp/apps/web/jh-web/&& sh h5-deploy.sh"


```

1. 同构视图
2. 同构样式 服务器端css样式内联 isomorphic-style-loader
3. 同构路由
4. 同构数据获取
5. 同构配置
6. 同构本地化







chrome `net::ERR_INCOMPLETE_CHUNKED_ENCODING` 运维 nginx 磁盘满了























```js
// 火狐浏览器 刷新 会触发unload 不会触发beforeUnload
// error 代码 火狐刷新的时候会出错
window.addEventListener('beforeunload', (e: any) => {
      this.beforeunloadHandler()
      const userAgent = navigator.userAgent
      const isOpera = userAgent.indexOf('Opera') > -1
      if (isOpera) {
        // 判断是否Opera浏览器
        return 'Opera'
      }
      if (userAgent.indexOf('Firefox') > -1) {
        this.unloadHandler()
      }
    })
    window.addEventListener('unload', () => {
      this.unloadHandler()
    })
```



css calc需要空格 正则{2,10}不能有空格



vue ref v-for 内部 新增 ref标识 this.$refs[ref] type array





