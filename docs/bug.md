# Bug

1. 前面的文件怎么没有了呢？

2. `yarn build`时，报错，需要 `npm i --save-dev @types/fs-extra`；

---

1. 上传到npm的包，为什么安装后，和本地直接node ./dist/src/index.js不一致（react逻辑中，上传到npm的dist中只有index.html，而没有src及其中的demo文件）

npmignore中，`src/`而非`src`

2. 

## TODO

1. yes/no的选择貌似不符合直觉
2. 生成项目的readme是统一版本
3. package.json中增设dev/prod环境命令
4. 项目创建后给与进入开发状态的提示
5. react&electron，脚本混乱报错
6. 各个项目模板增加 .gitignore