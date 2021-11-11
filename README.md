## 配置 src 绝对路径

tsconfig.json:

```js
{
  "compilerOptions": {
    "baseUrl": "./src",
    ...
}
```

## 安装配置 prettier

- yarn add --dev --exact prettier
- 创建配置文件 .prettierrc.json，
- 创建.prettierignore 配置不需要格式化的文件

- npx mrm@2 lint-staged，可以在 git add 之前执行自动 prettier --write 进行格式化
