// reducers/index.jsは、Reduxで扱うすべてのreducerを総括し、結合するためのファイル

import { combineReducers } from 'redux' // reducerを結合するための関数
import count from './count'


export default combineReducers({ count })


// export default combineReducers({ count, foo, bar, hoge }) 複数のreducerを扱う場合はこう書ける
