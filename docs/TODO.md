# TODO

## Taiki-Cli
- [ ] Linux上为什么没有触发包管理器的机制(yarn,lerna,npm)?

- TS工具库
- React项目
- Electron项目
- Node项目
- ReactNative项目
- 基于Remix的小程序项目


## Taiki-ReactNative

> ReactNative应用的最佳实践模板

## Features

- [ ] 状态管理
- [ ] 消息推送
- [ ] 组件组织
- [ ] 样式组织
- [ ] 路由
- [ ] 页面栈树
- [ ] 原生模块的导入导出

- [ ] 其它: babel,eslint,tsconfig,prettierrc,watchman,jest,metro... 

## TODO
- my1rn 项目名
- package.json中相关包

## DONE
- tsconfig.json
- metro.config.js
- jest.config.js
- index.js
- babel.config.js


## TODO

1. React+Vite时
```json
  "scripts": {
    "build:vite": "vite build", // 冗余
    "dev:vite": "vite", // 冗余
    "build": "vite build",
    "dev": "vite",
    "build:declaration": "tsc --declaration --declarationDir dist --emitDeclarationOnly src/index.ts",
    "docs": "typedoc --out docs src/index.ts",
    "test": "jest",
    "test:watch": "jest --watch"
  },
```

> 是否可以直接让使用者从众多配置文件中选择一个，然后手动改动自己的需求，然后经过docter脚本的准确性校验后，再生成项目脚手架。（在命令行中选择，可能会让人迷失自己的选择）