import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import RoomMovement from './Ob/RoomMovement'
import ParentComponent from './ParentComponent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
)
