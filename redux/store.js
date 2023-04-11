import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore} from 'redux'
import Reducer from './reducers/Reducer';

const store = createStore(Reducer)
export default store