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
        Authorization: `token 3f2688fc693c1d694260a68cba723bc99a187790`,
        // Authorization: `token 1c27da9ed2f9d64086bb67c9b3c17f0207d2b5c9`,
        // Authorization: `token f1ce8aa4d0eaa23b2b4bc076cd72200a51453ad4`,
        // Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        'content-type': 'application/json',
    }
});

// client.query({
//     query: gql `
// {
//   user(login: Praveen-k26) {
//     repositories(last: 100, isLocked: false) {
//       totalCount
//       nodes {
//         createdAt
//         description
//         name
//         url
//         viewerPermission
//         id
//       }
//     }
//   }
// }
//     `
// }).then(res => console.log(res));


// const client = new ApolloClient({
//     uri: 'https://api.github.com/graphql',
//     request: async operation => {
//         operation.setContext ({
//             headers: {
//                 Authorization: `token a34d779bed56ef8df59898da1e1623767e165906`,
//                 // Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN }`,
//                 'content-type': 'application/json',
//
//             }
//         });
//     }
// })


// const REPOS_QUERY = gql`
//   query repoQuery($after: String) {
//     viewer {
//       repositories(first: 5, isFork: true, after: $after) {
//         edges {
//           node {
//             id
//             name
//           }
//         }
//         pageInfo {
//           endCursor
//         }
//       }
//     }
//   }
// `;
//
// const REPO_SEARCH =
//     gql`
// query ($userId: String!){
//   user(login: $userId) {
//     repositories(last: 100, isLocked: false) {
//       totalCount
//       nodes {
//         createdAt
//         description
//         name
//         url
//         viewerPermission
//         id
//       }
//     }
//   }
// }
// `
//
// const [value, setValue] = useState(false);


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
