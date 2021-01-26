import React from 'react';
import QueryHandler from "../../graphql/queryHandler";

import './card.styles.scss'

const Card = ({
                    cardData,
                  searchText}) => {

    return (
        <div className='wrapper' data-test='card-wrapper'>
            {searchText && <QueryHandler searchParam={searchText} />}
            {cardData && cardData.length > 0 ? cardData.map((data,index) => {
                return <>
                    <div className="container">
                        <header className="header">
                            <img src={data.user.avatarUrl} alt={data.user.login}/>
                            <h4>{data.user.login}</h4>
                        </header>
                        <p className="bio">{data.user.bio}</p>
                        <p className="email">{data.user.email}</p>
                        <p className="website">{data.user.websiteUrl}</p>
                        <p className="location">{data.user.location}</p>
                        <a href={data.user.twitterUsername} className='a'>Follow</a>
                        <span><p>Followers: {data.user.followers.totalCount}</p></span>
                        <span><p>Following: {data.user.following.totalCount}</p></span>
                    </div>
                </>
            }) : "PROFILE"
            }
        </div>
    )
}

export default Card;
