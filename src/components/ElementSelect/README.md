# ElementSelect 元素选择

## Example

```jsx
<ElementSelect 
  selector='.selected-element' 
  visible={visible} 
  selectedElementStyle={{ border: '1px solid red' }} 
  extraContent={(domRect) => {
    const style = {
      position: 'absolute',
      width: 200,
      height: 100,
      line-height: 100,
      border-radius: 4,
      background: '#fff',
      text-align: 'center'Î,
      top: domRect.top + domRect.height + 10,
      left: domRect.left + domRect.width - 200
    }
    return (
      <div className='element-select-extra-content' style={style}>
        extra content
      </div>
    )
  }} 
/>
```

## API

|           属性           |                         类型                         | 默认值 |                                                                        描述                                                                        |
|:------------------------:|:----------------------------------------------------:|:------:|:--------------------------------------------------------------------------------------------------------------------------------------------------:|
|          prefix          |                       `string`                       |   -    |                                                                      类名前缀                                                                      |
|        className         |                       `string`                       |   -    |                                                                        类名                                                                        |
|          style           |                       `object`                       |   -    |                                                                      行内样式                                                                      |
|         visible          |                      `boolean`                       |   -    |                                                                      是否显示                                                                      |
|         selector         |                       `string`                       |   -    |                                                               选中元素的 css 选择器                                                                |
|   selectedElementStyle   |                       `object`                       |   -    |                                                                 选中元素的行内样式                                                                 |
| selectedElementClassName |                       `object`                       |   -    |                                                                   选中元素的类名                                                                   |
|       extraContent       | `(domRect: DOMRect | ClientRect) => React.ReactNode` |   -    | 额外的内容（`domRect` 是 `Element.getBoundingClientRect()` 的返回值，可以设置 extraContent `position` 为 `absolute`，然后使用 `domRect` 进行定位） |
