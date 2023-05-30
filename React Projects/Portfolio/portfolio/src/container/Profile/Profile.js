import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

const Profile = () => {
    return (
        <div className='profile-cont'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href='https://github.com/Kaushalkumar1998'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/kaushal-kumar-840322253/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-detais-name">
                        <span className='primary-text'>
                            {""}
                            Hello, I'M <span className='highlighted-text'>Kaushal Kumar </span>
                        </span>
                        <div className="profile-details-role">
                            <span className='primary-text'>
                                {""}
                                <h1>
                                    {""}
                                    <Typical
                                        loop={Infinity}
                                        wrapper='b'
                                        steps={[
                                            "Ethusiastic Dev",
                                            1000,
                                            "Front End-Developer",
                                            1000,
                                            "React Developer",
                                            1000,
                                        ]} />
                                </h1>
                                <span className='profile-role-tagline'>
                                    Knack of building application with front end operations.
                                </span>
                            </span>

                        </div>

                    </div>
                    <div className="profile-option">
                        <button className="btn primary-btn">
                            {""}
                            Hire Me{""}

                        </button>
                        <a href='kaushal resume-1.pdf' download='kaushal resume-1.pdf'>
                            <button className='btn highlighted-btn' >Get resume</button>
                        </a>
                    </div>
                </div>
                <div className="profil-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;