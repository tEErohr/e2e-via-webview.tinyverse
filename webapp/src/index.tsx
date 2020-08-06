import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'

const APP_ROOT_ID = 'webdriver-app'

const mountRoot = () => {
  const rootEl = document.getElementById(APP_ROOT_ID) || document.createElement('div')
  rootEl.id = APP_ROOT_ID
  document.body.appendChild(rootEl);
  return rootEl
}

const App = (props:{}={}) => {
  const [ count, setCount ] = React.useState(0)  

  const increase = useCallback(() => {
    setCount((count:number) => count + 1)
  },[setCount])

  return (<>
    <h3>Hello, iOS!</h3>
    <sub>{`Count: ${count}`}</sub>
    <button data-e2e-ref="app-button" onClick={increase}>Click Me!</button>
  </>)
}


const mountApp = (rootNode) => {
  ReactDOM.render(<App />, rootNode)
}

const rootNode = mountRoot();
mountApp(rootNode);
