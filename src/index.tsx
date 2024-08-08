import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux"
import store from './store/index.ts';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log('获取原始state中foucsRightNow值',store.getState().foucsRightNow)
root.render(
  <Provider store={store}>
        <App />
  </Provider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//计算组件性能方法reportWebVitals();

