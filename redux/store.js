import { createStore } from 'redux';
import rootReducer from '../redux/reducers/cartReducer';

const store = createStore(rootReducer);

export default store;