const OpenProps = require("open-props")
const postcssJitProps = require("postcss-jit-props")

module.exports = {
  plugins: [postcssJitProps(OpenProps)],
}
