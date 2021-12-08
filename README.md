Cli 是构建 typescript 应用的超级助手。它可以为项目或库生成开发基础设施，如 prettier、eslint、husky 等，甚至是 Github Actions 配置文件。它可以在你每次创造新东西的时候，节省很多时间。

众所周知，像 eslint 和 prettier 这样的工具可以使代码库变得更好。但是我们要花很多时间来配置它们。如果你不想让你写代码的热情被这些配置消耗掉，如果你不喜欢频繁地做这些烦人的“杂务”，那就试试 chore-cli 。


## 🚀 Usage

Using `Cli` is super easy.

```sh
npx @stevekeol/Cli <path-to-project>
```

You can also add `@stevekeol/Cli` as a global dependency.

```sh
pnpm add @stevekeol/Cli -g
# or
yarn global add @stevekeol/Cli
# or
npm install @stevekeol/Cli -g
```

And run

```sh
@stevekeol/Cli <path-to-project>
```

## ✨ Features

- [x] TypeScript
- [x] Editorconfig
- [x] Eslint (@typescript/eslint)
- [x] Prettier
- [x] Babel
- [x] Jest
- [x] TypeDoc
- [x] Commit message lint
- [x] Lint staged
- [x] Github actions for CI/CD
- [x] React (optional)
- [x] Esbuild (optional)
- [x] webpack (optional)
- [x] Rollup (optional)
- [x] Snowpack (optional)

## ✅ Todo

- [ ] Changelog
- [ ] Styles, such as style lint, Tailwind css
- [ ] Parcel

