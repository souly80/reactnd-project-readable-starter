import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="">
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'))
