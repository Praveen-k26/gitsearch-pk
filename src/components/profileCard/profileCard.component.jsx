import React from 'react';
import './profileCard.styles.css';
import image from "../../nyc1.jpg";


const ProfileCardComponent = ({data}) => {
    return (
        <>
            <div className='container' data-type='profile-card'>
                <div className="card-wrapper">
                    <div className="card">
                        <img src={image} alt='card-background' className='card-img' data-test='card-background'/>
                        <img src={data.user.avatarUrl} alt="profile image" className="profile-img" data-test='profile-image'/>
                        <h1 data-test='login-name'>{data.user.login}</h1>
                        <p className='job-title' data-type='job-title'>{data.user.company}</p>
                        <p className='about' data-test='bio'>{data.user.bio}</p>
                        <p className='about' data-test='socialmedia'>Twitter: {data.user.twitterUsername}</p>
                        <a href="#" className='btn' data-test='contact'>Contact</a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileCardComponent;

