import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import CV from '../resume/Sri_Resume.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="resume-body">
                <Grid className="resume-grid">
                    <Cell col={6}>
                        <div className="resume-text">
                            <h1>Resume</h1>
                            <p style={{ fontSize: '20px', fontFamily: 'PT+Sans' }}>
                                Please click on the icon to view my resume.
                            </p>
                            <p>
                                <a href={CV} target="_blank" rel="noreferrer noopener">
                                    <i className="fa fa-download" aria-hidden="true" />
                                </a> </p>
                        </div>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;
