# EC 蓝图 ???

## 项目简介

EC 蓝图是一个基于实体的控制系统，旨在通过地图内的逻辑控制和自定义插件的读取与运行，实现复杂的逻辑控制的编写。

- 基于实体来控制地图内的逻辑。
- 使用自定义插件读取和运行特定任务。

## 安装指南

### 安装 Node-RED

1. 请确保已安装 [Node.js](https://nodejs.org/)。

2. 使用以下命令安装 Node-RED：

   ```bash
   npm install -g node-red
   ```

### 装载到 node-red

在项目根目录下运行以下命令，将项目链接到全局 npm 包：

```bash
npm link
```

然后启动 node-red
```bash
node-red
```
