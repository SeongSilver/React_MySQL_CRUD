import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from "redux-saga" 
import logger from "redux-logger";
import rootReducer from './components/slice/rootSlice';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

//configureStore 함수 내 필요한 데이터를 집어놓고 store라는 변수로 받아둔다
const store = configureStore({
    reducer : rootReducer,
    middleware: [sagaMiddleware, logger],
    //devTools는 웹의 devTool과 연결할 것인지 여부를 적는 것이다
    devTools:true,
    //preloadedState는 reducer에서 정해둔 initialState보다 더 앞스 prefix될 state
    preloadedState: initialState,
});

//saga가 제대로 돌아가려면 꼭 run()을 해줘야 한다.
sagaMiddleware.run(rootSaga);

export default store;
