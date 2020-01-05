let UUID = require('uuid')
let PATH = require('path')

module.exports = (ctx) => {
  const register = () => {
    ctx.helper.beforeUploadPlugins.register('rename', {
      handle (ctx) {
        for (let i = 0; i < ctx.output.length; i++) {
          let filename = UUID.v4().replace(/-/g, '')
          let extname = PATH.extname(ctx.output[i].fileName)

          ctx.output[i].fileName = filename + extname

          console.log(ctx.output[i].fileName)
        }
      }
    })
  }
  return {
    register
  }
}
