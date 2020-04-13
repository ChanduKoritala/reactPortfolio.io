import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import FooterComp from './footer';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={6}>
                        <div className="aboutme-text">
                            <h1>About Me</h1>

                            <p style={{ fontSize: '20px', fontFamily: 'PT+Sans' }}>Software Test Analyst and IT support engineer with a demonstrated history of working in Environmental, Telecommunications and Banking industries. Skilled in windows and iOS device troubleshooting, hardware and software diagnosis, active directory, customer service, process implementation, quality assurance, agile methodologies, web application testing, and requirements analysis.

                            Presently learning Full Stack Web Development at the University Of Adelaide, where I have had an opportunity to learn and work on new technologies and frameworks such as HTML/CSS, JavaScript, BootStrap, ReactJS, NodeJS, Express, MongoDB.

                            Please click on the 'GitHub' link to view my projects. </p>
                            <p style={{ fontSize: '20px', fontFamily: 'PT+Sans' }}>GitHub: <a href="https://github.com/ChanduKoritala?tab=repositories" target="_blank" rel="noreferrer noopener">https://github.com/ChanduKoritala?tab=repositories    </a></p>
                        </div>

                    </Cell>
                </Grid>
                <hr />
                <div>
                <FooterComp/>
                </div>
                
            </div>
            
        )
    }
}

export default About;
