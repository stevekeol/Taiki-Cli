# Memo

## 如何让本地开发的Taiki-Cli的代码提交到npm后，全局安装的就是最新版本。
- 当业务代码写好，本地编译测试通过
- package.json中修改版本号
- `git add .` + `git commit -m "xxx"`
- npm publish
- [git push]