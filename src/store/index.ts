import { createStore } from 'redux';
import reducer from './reducer/index.ts'; // 导入 reducer

const initialState = {
    foucsRightNow: false,
    inputOrNot: false,
    ninePointClikeOrNot: false,
    inputFocusOrHover: false,
};

const store = createStore(reducer, initialState);

export default store;