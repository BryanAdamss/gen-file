/**
 * @author GuangHui
 * @description info
 */

const chalk = require('chalk')

const log = (msg) => console.log(msg)
const info = (msg) => log(chalk.green(msg))
const warn = (msg) => log(chalk.yellow(msg))
const errorMsg = (msg) => log(chalk.warn(msg))

module.exports = {
  info,
  warn,
  errorMsg,
}
