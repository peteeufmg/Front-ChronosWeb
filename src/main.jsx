import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/GlobalStyle.js'
import App from './App.jsx'
import { ConfigProvider } from 'antd'
import { TimerProvider } from './Components/TimerProvider/TimerProvider.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{
        components: {
          Input: {
              activeBorderColor: "#373634",
              hoverBorderColor: "#373634"
          },
          Button: {
              colorPrimary: "#464540"
          },
          Checkbox: {
              colorPrimary: "#464540"
          },
          Select: {
              activeBorderColor: "#373634",
              hoverBorderColor: "#373634",
              colorPrimary: "#464540"
          }
      },
        token: {
          fontFamily: "Jura",
          colorPrimaryActive: "#373634",
          colorPrimaryHover: "grey",
          colorTextPlaceholder: "rgba(0, 0, 0, 0.7)"
        }
      }}
    >
      <GlobalStyle/>
      <TimerProvider>
      <App />
      </TimerProvider>
    </ConfigProvider>
  </React.StrictMode>,
)