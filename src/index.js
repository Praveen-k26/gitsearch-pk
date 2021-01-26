import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHookProvider} from 'react-apollo-hooks';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorHandling from "./errorHandling/errorHandling";
import ThemeContext, {themes} from "./context/ThemeContext";



const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const cache = new InMemoryCache();
const client = new ApolloClient({
    // link: httpLink,
    uri: 'https://api.github.com/graphql',
    cache,
    headers: {
        Accept: "application/json",
        Authorization: `token ${process.env.REACT_APP_MY_KEY}`,
        'content-type': 'application/json',
    }
});


ReactDOM.render(
    <ApolloProvider client={client}>
        {/*<ApolloHookProvider client={client}>*/}
        <ThemeContext.Provider value={themes.dark}>
            <ErrorBoundary fallbackComponent={ErrorHandling}>
                <App/>
            </ErrorBoundary>
        </ThemeContext.Provider>
        {/*</ApolloHookProvider>*/}
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
