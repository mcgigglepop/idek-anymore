import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import {persistStore} from 'redux-persist';

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
