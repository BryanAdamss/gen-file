/**
 * @author GaungHui
 * @description create file
 */

const fs = require('fs')

const name = require('./name')

const createFile = (pathName, text) => fs.writeFileSync(pathName, text, 'utf-8')
const createDefaultFile = (pathName) =>
  createFile(pathName, `${name}-test-text`)

module.exports = {
  createFile,
  createDefaultFile,
}
