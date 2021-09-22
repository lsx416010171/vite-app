// element 3 完全导入
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

// 按需加载
// import {
//     ElLink,
//     ElButton
//   } from 'element3'

export default app => {
  app.use(Element3)
}
