---
title: npm离线包安装
sidebar: 'auto'
date: 2020-03-16
tags:
 - node
categories:
 - 后端
---
在有网的情况下，全局安装pm2只需要
```bash
npm install -g pm2
```
而公司的部署环境不能访问公网，想要从npm仓库安装全局依赖无法实现，只能采用离线包安装的方式，以下为pm2离线包安装的记录。

## 准备离线包
找一台有网的电脑，如果没安装过pm2，则全局安装一下
```bash
npm install -g pm2
```
- 查找npm默认全局安装目录
```bash
npm config get prefix
```
假设默认全局安装目录为C:\Users\Administrator\AppData\Roaming\npm
- 进入npm默认全局安装目录下的node_modules
```bash
cd C:\Users\Administrator\AppData\Roaming\npm\node_modules
```
- 压缩pm2

如果是要在windows中使用的离线包，直接使用压缩包软件压缩，如果是linux，可以使用以下命令:
```bash
tar czvf pm2.tar.gz pm2/
```
此时会生成一个pm2的tar.gz压缩包

## 部署到服务器

- windows

查找npm默认全局安装目录
```bash
npm config get prefix
```
假设默认全局安装目录为C:\Users\Administrator\AppData\Roaming\npm，如果目录下没有node_modules，则新建一个node_modules文件夹，

进入C:\Users\Administrator\AppData\Roaming\npm\node_modules，将pm2压缩包拷贝此处，并解压

为了在系统环境中使用pm2命令，还需要在C:\Users\Administrator\AppData\Roaming\npm中增加pm2的脚本，此脚本可在之前有网电脑的全局安装目录C:\Users\Administrator\AppData\Roaming\npm下拷贝

到此为止，pm2全局离线包安装完成，可在终端输入以下命令测试
```bash
pm2 list
```

- linux

查找npm默认全局安装目录
```bash
npm config get prefix
```

假如安装路径为/home/mss/node/node-v12.16.1-linux-x64，进入以下目录
```bash
cd /home/mss/node/node-v12.16.1-linux-x64/lib/node_modules
```
上传pm2压缩包到此文件夹，并解压
```
tar xvf pm2.tar.gz
```
建立软连接
```bash
ln –s /home/mss/node/node-v12.16.1-linux-x64/lib/node_modules/pm2/bin/pm2 /usr/local/bin/
```
此时离线包已安装完成，可在系统中使用pm2命令