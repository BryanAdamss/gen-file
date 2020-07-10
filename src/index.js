/**
 * @author GuangHui
 * @description gen file
 */

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const Inquirer = require('inquirer')

const name = require('./name')
const render = require('./render')
const changeCase = require('./case')
const getConfig = require('./config')
const { info, warn, errorMsg } = require('./message')
const { createDefaultFile, createFile } = require('./create')

let config = getConfig(name)

let relativePathObj
Inquirer.prompt([
  {
    name: 'fileName',
    type: 'input',
    message: '请输入文件名',
    validate(input) {
      return new Promise((resolve, reject) => {
        if (input == null || input.trim() === '') {
          reject('文件名是必填项')
        } else {
          resolve(true)
        }
      })
    },
  },
])
  .then(({ fileName }) => {
    relativePathObj = path.parse(path.join(config.output, fileName))

    // 调整文件名case
    relativePathObj.name = changeCase(relativePathObj.name, config.case)
    relativePathObj.base = `${relativePathObj.name}${relativePathObj.ext}`

    // 读取ejs模板文件
    let template = ''
    try {
      template = fs.readFileSync(config.template, 'utf-8')
    } catch (error) {
      warn('template不存在')
    }

    // 创建目录
    if (relativePathObj.dir) mkdirp.sync(relativePathObj.dir)

    const relativePath = path.format(relativePathObj)
    const absPath = path.join(process.cwd(), relativePath)
    if (template) {
      // 模板包含ejs表达式
      if (template.includes('<%')) {
        render(template, {
          config,
          fileName: relativePathObj.name,
        }).then((content) => {
          createFile(relativePath, content)
          info(`文件创建成功，${absPath}`)
        })
      } else {
        createFile(relativePath, template)
        info(`文件创建成功，${absPath}`)
      }
    } else {
      warn('模板不存在，将创建默认文件')

      // 模板不存在，创建默认文件
      createDefaultFile(relativePath)
      info(`文件创建成功，${absPath}`)
    }
  })
  .catch((err) => {
    errorMsg(err)
  })
