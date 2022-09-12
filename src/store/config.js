import {combineReducers, createStore} from 'redux';
import BaiTapDatVeReducer from './reducers/BaiTapDatVeReducer';

const rootReducers = combineReducers({
    BaiTapDatVeReducer,

    
})

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())