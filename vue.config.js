module.exports = {
  runtimeCompiler: true, 
  "lintOnSave": false,
  "devServer": {
    "port": 3000
  },
  "css": {
    "extract":{
      "ignoreOrder": true
    }
  },
  "configureWebpack":{
    "performance": {
      "hints": false
    },
    "optimization": {
      "splitChunks": {
        "minSize": 10000,
        "maxSize": 250000,
      }
    }
  }
}