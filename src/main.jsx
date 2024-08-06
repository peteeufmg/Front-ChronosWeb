import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/GlobalStyle.js'
import App from './App.jsx'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{
        token: {
          fontFamily: "Jura",
        }
      }}
    >
      <GlobalStyle/>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
