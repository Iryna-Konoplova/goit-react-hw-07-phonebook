// Модули
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


// Компоненты
import contactsReducers from './contacts/contacts-reduser';


const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}).concat(logger);



const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);


// eslint-disable-next-line
// export default {store, persistor};

export default store
