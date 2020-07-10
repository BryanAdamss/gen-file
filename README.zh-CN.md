# generate-file

> 读取 ejs 模板并生成文件

[English](https://github.com/BryanAdamss/generate-file/blob/master/README.md) | [中文](https://github.com/BryanAdamss/generate-file/blob/master/README.zh-CN.md)

## 安装

```sh
npm install @bryanadamss/generate-file

or

yarn add @bryanadamss/generate-file
```

## 配置

- [cosmiconfig](https://www.npmjs.com/package/cosmiconfig)配置风格
  - 所以你可以在项目根目录下创建一个`generate-file.config.js`修改默认配置，就像下面这样

```js
// generate-file.config.js
module.exports = {
  case: 'snakeCase', // 默认 'paramCase'(kebab-case)
  output: 'src/views', // 默认 '.'，就是 process.cwd()
  template: '.generate-file-vue-template', // 默认 '.generate-file-template',地址相对于 process.cwd()
}
```

- `case`
  - 生成文件文件名的大小写格式
  - 底层使用[https://www.npmjs.com/package/change-case](https://www.npmjs.com/package/change-case)
  - 支持`camelCase, capitalCase,constantCase,dotCase,headerCase,noCase,paramCase,pascalCase,pathCase,sentenceCase,snakeCase`;
- `output`
  - 文件的生成目录地址
  - 相对于`process.cwd()`
- `template`
  - `ejs`模板的文件名

## Ejs 模板变量

- 可以使用所有合并后的配置文件变量和一个额外的`fileName`变量
- 你可以在自定义的配置文件上挂在额外变量，然后在`esj模板`中渲染他们

## 例子

```js
// generate-file.config.js
module.exports = {
  case: 'pascalCase',
  output: 'src/views',
  template: '.generate-file-vue-template',
}

// .generate-file-vue-template
<template>
  <div class="c-<%=fileName%>"></div>
</template>

<script>
/**
 * * <%=fileName%>
 */

export default {
  name: '<%=fileName%>',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-<%=fileName%> {

}
</style>

// npm script
"scripts":{
  "new:comp":"node node_modules/@bryanadamss/generate-file"
}

// run script
npm run new:comp

// stdin
test-generate-file.vue


// ------------------------------------
// output
// ------------------------------------

// dir tree
|-src
|--views
|---TestGenFile.vue


// src/views/TestGenFile.vue
<template>
  <div class="c-TestGenFile"></div>
</template>

<script>
/**
 * * TestGenFile
 */

export default {
  name: 'TestGenFile',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-TestGenFile {

}
</style>

```

## NPM

- [vue-cli-plugin-auto-alias](https://www.npmjs.com/package/vue-cli-plugin-auto-alias)
- [@bryanadamss/drawing-board](https://www.npmjs.com/package/@bryanadamss/drawing-board)
- [@bryanadamss/num2chn](https://www.npmjs.com/package/@bryanadamss/num2chn)
- [ant-color-converter](https://www.npmjs.com/package/ant-color-converter)

## Show your support

如果你觉得这个插件对你有帮助，请给一个小星星 ⭐️(star)

## 📝 License

Copyright © 2020 [BryanAdamss@foxmail.com](https://github.com/BryanAdamss).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bryanadamss.github.io/"><img src="https://avatars3.githubusercontent.com/u/7441504?v=4" width="64px;" alt=""/><br /><sub><b>GuangHui</b></sub></a><br /><a href="#projectManagement-BryanAdamss" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
