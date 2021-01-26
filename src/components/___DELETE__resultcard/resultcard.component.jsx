import React from 'react';
import './resultcard.styles.scss';
import CustomButton from "../button/button.component";
import {useQuery} from 'react-apollo';
import QueryHandler from "../../graphql/queryHandler";


const ResultCard = ({totalCount, data,repos, more,query, fetch,searchText,...otherProps}) => {

    return (
        <div className='wrapper'>
            {searchText && <QueryHandler searchParam={searchText} />}

            {
                repos && repos.length > 0 ?
                    <>
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
                                    <td>{repo.name}</td>
                                    <td>{repo.createdAt}</td>
                                    <td>{repo.UpdatedAt}</td>
                                    <td>{repo.stargazerCount}</td>
                                    <td>{repo.forkCount}</td>
                                </tr>
                            }) : ""}
                            </tbody>
                        </table>

                    </> : "No Repos Found!!"
            }
            {totalCount >5 ?
                ( <CustomButton
                    onClick={()=>console.log('Load More Repos')}
                >
                    More
                </CustomButton> ): ""
            }

        </div>
    )
}

export default ResultCard;