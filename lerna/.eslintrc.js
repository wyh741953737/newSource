module.exports = {
  // env 表示当前运行环境都支持的API有那些
  // eslint 会根据当前运行环境的配置去检查代码中所使用的 API 是否匹配当前环境所配置的内容
  env: {
    browser: true, // 表示支持浏览器环境的所有API
    es2021: true, // 表示支持ES2021的所提供的API
  },
  // 继承共享配置，这就是继承了standard风格的标准
  extends: [
    'standard'
  ],
  
  // parser: '@typescript-eslint/parser', // 语法解析器，比如我们要使用ts，ts有新的语法就需要配置这个
  
  // 设置语法解释器的配置，控制是否允许使用某个es版本的新特性，下面表示es12
  parserOptions: {
    ecmaVersion: 12
  },
  // 配置 eslint 校验规则的开启或是关闭
  // 详细的配置查看官方文档
  rules: {
    'no-alert': 'error' // off ||  warn || error
  },
  // 额外的声明在代码中可以使用的成员
  globals: {
    'reborn': 'readonly', // 此时配置了reborn ，在代码中就可以不定义使用reborn，eslint检查并不会爆出错误（！！！不过代码实际上是会有 REF Error）
  }
}

