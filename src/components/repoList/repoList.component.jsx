import React from 'react';
import './repoList.styles.css';
import QueryHandler from "../../graphql/queryHandler";
import CustomButton from "../button/button.component";


const RepoList = ({totalCount, data,repos, more,query,loadMore, fetch,searchText,...otherProps}) => {

    return (
        <>
            {searchText && <QueryHandler searchParam={searchText} />}
                <div className="card-wrapper">
                    <div className='table-card'>
                        <div className="card">
                            <table className='table'>
                                <thead className='tablehead'>
                                <tr>
                                    <th>#</th>
                                    <th>Repo</th>
                                    <th>Created on</th>
                                    <th>Updated</th>
                                    <th>Stars</th>
                                    <th>Forks</th>
                                </tr>
                                </thead>
                                <tbody className='tbody'>
                                {repos && repos.length > 0 ? repos.map((repo,index) => {
                                    return <tr key={repo.id}>
                                        <td>{index +1}</td>
                                        <td>
                                            <a href={repo.url}>{repo.name}</a>
                                        </td>
                                        <td>{repo.createdAt}</td>
                                        <td>{repo.UpdatedAt}</td>
                                        <td>{repo.stargazerCount}</td>
                                        <td>{repo.forkCount}</td>
                                    </tr>
                                }) : ""}
                                </tbody>
                            </table>
                            {/*{totalCount && totalCount > 20 ?*/}
                            {/*    <CustomButton onclick={loadMore}>More</CustomButton>*/}
                            {/*    : ''*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default RepoList;
