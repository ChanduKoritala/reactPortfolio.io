import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style= {{fontSize: '30px', fontFamily:'PT+Sans'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (+61) 435536261</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style= {{fontSize: '30px', fontFamily:'PT+Sans'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    chanduk0406@gmail.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style= {{fontSize: '30px', fontFamily:'PT+Sans'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    chendu.4</ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;
