import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profile from '../images/profile.png'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <img
                            src={Profile} alt="profileImage"
                            className="profile-image"/>
                        <div className = "banner-text">
                            <h1>Front-end Web Developer</h1>

                        <hr/>
                        <p>
                            HTML/CSS | BootStrap | JavaScript | React | NodeJS | Express | MySql | MongoDB
                        </p>
                        <div className = "social-links">
                            {/* LinkedIn */}
                            <a href= "https://www.linkedin.com/in/sri-krishna-chandu-koritala-54867425/" target= "_blank" rel="noreferrer noopener">
                                <i className="fa fa-linkedin-square" aria-hidden= "true"/>
                            </a>
                            {/* GitHub */}
                            <a href= "https://github.com/ChanduKoritala" target= "_blank" rel="noreferrer noopener">
                                <i className="fa fa-github-square" aria-hidden= "true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
