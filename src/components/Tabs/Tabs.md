Example

```jsx
import TabPanel from './TabPanel';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId: 'b'
    }
    this.onTabChange = this.onTabChange.bind(this)
  }

  onTabChange (id) {
    this.setState({
      activeId: id
    });
  }

  render () {
    const { activeId } = this.state

    return (<div>
      <Tabs 
        activeId={activeId}
        onChange={this.onTabChange}>
        <TabPanel 
          id='a'
          tab='选项A'>
          <h2>选项A的内容11111</h2>
        </TabPanel>
        <TabPanel 
          id='b'
          tab='选项B'>
          <h3>选项B的内容2222222</h3>
        </TabPanel>
        <TabPanel 
          id='c'
          tab='选项C'>
          <p>选项C的内容333333</p>
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

