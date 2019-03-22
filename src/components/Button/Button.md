Example

```jsx
<h3>size</h3>
<Button size='sm'>sm</Button>
<Button size='md'>md</Button>
<Button size='lg'>lg</Button>

<h3>theme</h3>
<Button theme='primary'>primary</Button>
<Button theme='yellow'>yellow</Button>
<Button theme='white-primary'>white-primary</Button>
<Button theme='white-cyan'>white-cyan</Button>

<h3>block</h3>
<div className='block-box'>
  <Button block>block</Button>
</div>
<div className='block-box'>
  <Button block theme='yellow'>block</Button>
</div>
<div className='block-box'>
  <Button block theme='white-primary'>block</Button>
</div>

<h3>disabled</h3>
<Button disabled>disabled</Button>
<Button disabled theme='yellow'>disabled</Button>
<Button disabled theme='white-primary'>disabled</Button>

<style>
  {`
    .hmly-button + .hmly-button {
      margin-left: 20px;
    }
    .block-box {
      width: 300px;
    }
    .block-box + .block-box {
      margin-top: 20px;
    }
  `}
</style>
```
