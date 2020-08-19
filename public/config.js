var RUNTIME_ENVIRONMENT = 'DEV' // DEV 开发环境  TEST 测试环境   PRO 生产环境
var obj = {}

switch (RUNTIME_ENVIRONMENT) {
  case 'DEV':
    obj.ROOT_SERVER = 'http://175.24.230.41/mall'
    break
  case 'TEST':
    obj.ROOT_SERVER = 'http://175.24.230.41/mall'
    break
  case 'pro':
    obj.ROOT_SERVER = 'http://175.24.230.41/mall'
    break
}
window.rootData = obj
