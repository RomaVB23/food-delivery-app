import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import combineReducers from './index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
