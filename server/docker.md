## docker
docker 默认路径 /var/lib/docker
### 容器列表
```bash
docker ps
docker ps -a
```
### 重启容器
```bash
docker restart containerId1 containerId2
```
### 停止容器
```bash
docker stop containerId1 containerId2
```
### 启动容器
```bash
docker start containerId1 containerId2
//启动所有容器
docker start $(docker ps -a -q)
```
### 镜像列表
```bash
docker images
```
### 删除镜像
```bash
docker rmi image_id_1
//删除所有镜像
docker rmi $(docker images -q)
```
### 更新容器启动时自动启动
```bash
docker update --restart=always $(docker ps -q -a)
docker update --restart=always containerId1
```
### 监控容器
```bash
docker stats containerId1
docker stats $(docker ps -a -q)
docker stats --no-stream $(docker ps -a -q)
```
### 进入容器内部
```bash
docker exec -it containerId /bin/bash
```
### 查看日志
```bash
docker logs containerId
```

### 新建容器并启动
docker run [可选参数] image | docker container run [可选参数] image
\# 参书说明 
--name="Name" 容器名字 tomcat01 tomcat02 用来区分容器 
-d 后台方式运行 
-it 使用交互方式运行，进入容器查看内容 
-p 指定容器的端口 -p 8080(宿主机):8080(容器) -p ip:主机端口:容器端口 -p 主机端口:容器端口(常用) -p 容器端口 容器端口 
-P(大写) 随机指定端口
--rm Automatically remove the container   when it exits

#### docker 配置nginx镜像

```bash
docker run -d -p 8080:80 --name d-nginx -v /usr/local/nginx/www:/usr/share/nginx/html -v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/nginx/logs:/var/log/nginx nginx
```

#### docker 可视化

```bash
docker run -d -p 8080:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```