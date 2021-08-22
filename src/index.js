// Модули
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// Компоненты
import App from './App';
import store from './redux/store'

// Стили
import 'modern-normalize/modern-normalize.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
