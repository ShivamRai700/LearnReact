import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | React </h1>
      <p></p>
    </div>
  )
}

// const reactElement = {
//   type : 'a',
//   props : {
//     href : 'https://google.com',
//     target : '_blank'
//   },
//   children : 'Click me to visite google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit Google here</a>
)

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  'a', //tagtype
  { href: 'https://wikipedia.org', target: '_blank' }, // attributes
  'click me to visit Wikipedia', //text
  anotherUser // variable injection
)

createRoot(document.getElementById('root')).
  render(
    reactElement
    // <App/>
  )
