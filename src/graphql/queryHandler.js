import React from 'react';
import {gql} from "apollo-boost";
// import gql from "graphql-tag";
import {useQuery} from 'react-apollo';
// import {useQuery} from "@apollo/client";
import Spinner from "../components/spinner/spinner.component";
import Card from "../components/card/card.component";
import RepoListComponent from "../components/repoList/repoList.component";
import ProfileCardComponent from "../components/profileCard/profileCard.component";
import './queryHandler.css';
import ErrorMessage from "../components/errorMessage/errorMessage.component";

const QueryHandler = ({searchText}) => {


 const REPO_SEARCH =
    gql`
query initialLoad ($userId: String!){
  user(login: $userId) {
    login
    id
    bio
    avatarUrl
    company
    email
    location
    
    followers{
      totalCount
    }
    following{
      totalCount
    }
    twitterUsername
    websiteUrl
    repositories(last: 20) {
      totalCount
      nodes {
         forkCount
        stargazerCount
        updatedAt
        createdAt
        description
        name
        url
        viewerPermission
        id
      }
      
      pageInfo{
        endCursor
        
      }
    }
  }
}
`

//
    const {loading, data, error} = useQuery(REPO_SEARCH, {
        variables: {userId:searchText}
    });



    //A spinner will be displayed if the status is loading.
    if(loading) {
        return <Spinner />
    }

    //An error message if something goes wrong.
    if(searchText && error) {
        return <ErrorMessage/>
    }

    //if Data is available.
    if(data) {
        return (
            <>
                {/*<SearchBar query={REPO_SEARCH}/>*/}
                <div className='displayResult' data-test='displayResult'>
                    <RepoListComponent
                        repos={data && data.user.repositories.nodes}
                        totalCount={data && data.user.repositories.totalCount}
                        // loadMore={fetchMoreRepos}
                    />
                    <ProfileCardComponent data={data}/>
                </div>
            </>
        )
    }
    if(data) {
        return (
            <>
                <Card
                    data={data}
                />
            </>
        )
    }
    return ""
}
export default QueryHandler;

//------------------------------------------------------//
// const LOAD_MORE =
//         gql`
// query loadMoreReps ($after: String!){
//   user(login: $userId) {
//     id
//     bio
//     avatarUrl
//     company
//     email
//     location
//     twitterUsername
//     websiteUrl
//     followers {
//         totalCount
//     }
//     repositories(first: 10, isLocked: false ) {
//       totalCount
//       nodes {
//         forkCount
//         stargazerCount
//         updatedAt
//         createdAt
//         description
//         name
//         url
//         viewerPermission
//         id
//       }
//       pageInfo{
//         endCursor
//       }
//     }
//   }
// }
// `

//    const fetchMoreRepos = () => {
//     const {endcursor} = data.user.repositories.pageInfo;
//     console.log("LoadMORE-------", pageInfo);
//
//     data && fetchMore({
//         variables: { after: endcursor, userId:searchText},
//         updateQuery: (prevResult, {fetchMoreResults }) => {
//             if(!fetchMoreResults) return  prevResult;
//             fetchMoreResults.user.repositories = [
//                 ...prevResult.user.repositories,
//                 ...fetchMoreResults.user.repositories
//             ];
//             return fetchMoreResults;
//         }
//     })
// }