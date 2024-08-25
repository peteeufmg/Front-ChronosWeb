import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/GlobalStyle.js'
import App from './App.jsx'
import { ConfigProvider } from 'antd'
import { TimerProvider } from './Components/TimerProvider/TimerProvider.jsx';
import { DataProvider } from './Components/DataProvider/DataProvider.jsx';
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
      <TimerProvider>
        <DataProvider>
      <App />
      </DataProvider>
      </TimerProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
