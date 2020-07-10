/**
 * @author GuangHui
 * @description config
 */
const { cosmiconfigSync } = require('cosmiconfig')

const DEFAULT_CONFIG = {
  case: 'paramCase', // kebab-case
  output: '.', // current dir
  template: '.gen-file-template',
}

const getPkgName = (name) => name.slice(name.lastIndexOf('/') + 1)

const getConfig = (name) => {
  const { config = {} } = cosmiconfigSync(name).search() || {}
  return Object.assign({}, DEFAULT_CONFIG, config)
}

module.exports = {
  getConfig,
  getPkgName,
}
