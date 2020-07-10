# generate-file

> read ejs template then generate a file

[English](https://github.com/BryanAdamss/generate-file/blob/master/README.md) | [中文](https://github.com/BryanAdamss/generate-file/blob/master/README.zh-CN.md)

## Install

```sh
npm install @bryanadamss/generate-file

or

yarn add @bryanadamss/generate-file
```

## Config

- [cosmiconfig](https://www.npmjs.com/package/cosmiconfig) style config
  - so you can put a `generate-file.config.js` in the project root to modify default config just like below

```js
// generate-file.config.js
module.exports = {
  case: 'snakeCase', // default to 'paramCase'(kebab-case)
  output: 'src/views', // default to '.'，its process.cwd()
  template: '.generate-file-vue-template', // default to '.generate-file-template',relative to process.cwd()
}
```

- `case`
  - generated file name case
  - support `camelCase, capitalCase,constantCase,dotCase,headerCase,noCase,paramCase,pascalCase,pathCase,sentenceCase,snakeCase`;
  - You can visit [https://www.npmjs.com/package/change-case](https://www.npmjs.com/package/change-case) for a detail
- `output`
  - output directory
  - relative to `process.cwd()`
- `template`
  - `ejs` template file name

## Ejs template vars

- you can get all merged config variable and an additional variable `fileName`

## Examples

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

Give a ⭐️ if this project helped you!

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
