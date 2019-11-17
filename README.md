## v1 
1. react-guidelist -> storybook
2. styled-component -> sass
3. 添加了一些组件

## v2 版本的目标：
1. 按照新的设计规范来规范组件的样式
- 之前并非按照设计规范来编写组件的，组件样式看起来可能不协调
- 色彩：使用 “色板” 中的颜色（之前的颜色，是取设计稿上的，并没有严格的规定颜色的来源）

2. 添加组件的动效
- 之前很多需要动画的组件没有动效，太朴素了

3. 全面使用 typescript
- 之前的 storybook 是使用 js 写的，会出现这样的问题：无法验证 catui 中定义的类型是否正确
- 之前的组件库中充斥着 any 和未定义类型，typescript 变成了 anyscript

4. 提高测试覆盖率
- 之前很多老的组件没有单元测试

5. 提高组件的质量
- 之前的组件质量堪忧，如不传某些 props，内部代码就报错

6. 更好的移动端适配
- 之前的组件对移动端这一块的适配不足

7. 按需加载
- catui 全局样式不要被单个组件的 scss 引入

## 需要优先迁移的组件
- [x] Avatar
- [x] Icon
- [x] Message
- [x] Guidance
- [x] Question
- [x] Button
- [x] Tabs
- [x] Loading
- [x] Modal
- [x] Drawer
