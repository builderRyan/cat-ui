Example

```jsx
import TabPanel from './TabPanel';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div>
      <Tabs>
        <TabPanel 
          id='a'
          tab='选项A'>
          <h2>11111</h2>
        </TabPanel>
        <TabPanel 
          id='b'
          tab='选项B'>
          <h3>2222222</h3>
        </TabPanel>
        <TabPanel 
          id='c'
          tab='选项C'>
          <p>333333</p>
        </TabPanel>
      </Tabs>

      <style>
        {`

        `}
      </style>
    </div>
    )
  }
}

<Example />
```

