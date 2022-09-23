import {createSlice} from '@reduxjs/toolkit';

//리덕스 모듈 하나를 만들려면 action type을 정의하고, action creator를 만들고
//redux-saga를 사용하는 경우 saga를 만들고, reducer까지 만들어야 하는데 이 모든게 (saga 빼고)
//createSlice()한번에 가능하다
export const articleSlice = createSlice({
    name:'article',
    initialState: {id: 0, title:"", content:"", views:0},
    reducer: {
        registerArticle:(state, article) => {
            console.log(article);
            return{
                ...article,
                id:state.id,
            };
        },
        registerArticleAsync: (state, {payload}) => {
            console.log(payload);
            debugger;
            return{
                ...state,
                id:payload.id,
            };
        },
    },
});

export const articleReducer = articleSlice.reducer;
export const articleAction = articleSlice.actions;
