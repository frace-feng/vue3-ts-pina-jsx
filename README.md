# Vue 3 + TypeScript + Vite + pinia

## 目的：在vue3中学习

1. ts用法
2. pinia
3. jsx写法
4. husky

与vue2的不同之处有：

1. setup语法糖
   1. setup有哪些写法
   2. vue3 script标签上有setup和没有setup的区别
2. 组合式API
3. teleport
4. suspense
5. 动态图片如何实现
6.

## 新的框架级别推荐

Vue 3 的支持库进行了重大更新。以下是新的默认建议的摘要:

新版本的 Router, Devtools & test utils 来支持 Vue 3
构建工具链: Vue CLI -> Vite
状态管理: Vuex -> Pinia
IDE 支持: Vetur -> Volar
新的 TypeScript 命令行工具: vue-tsc
静态网站生成: VuePress -> VitePress
JSX: @vue/babel-preset-jsx -> @vue/babel-plugin-jsx

## 出现的问题

1. eslint校验不提示
2. vite 没有热更新
   vite.config.ts

   ```JS
   export default defineConfig({
      server:{
         open: true,
         hmr: true
      }
   })
   ```

3. JSX 元素类型“TodoItem”不具有任何构造签名或调用签名：jsx
export const TodoItem = defineComponent({})包裹一下
