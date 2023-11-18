import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "./StoreContext";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<Provider store={store}>*/}
            <Provider store={store}>
                <App
                    // state={store.getState()}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>

            {/*</Provider>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => {
    rerenderEntireTree()
})

