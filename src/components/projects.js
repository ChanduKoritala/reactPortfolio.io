import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="cards">
                <h1>Projects</h1>
                <Grid className="projects-grid">
                    <Cell col={4}>
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image1"> Recipe Finder</CardTitle>
                            <CardText>
                                An app to find a set of recipes based off a single ingredient. The search input takes in an ingredient and then displays 10 recipe options and an image relating to the recipe.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/EdwardEMC/project1.git" target= "_blank" rel="noreferrer noopener">GitHub</Button>
                                <Button colored a href="https://edwardemc.github.io/project1/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    {/* Project 2 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image2"> Task Master Pro</CardTitle>
                            <CardText>
                                An application which is allows groups of users to work together more cohesively to quickly and thoroughly complete assigned tasks.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/anu-dam/TMC.git" target= "_blank" rel="noreferrer noopener">GitHub</Button>
                                <Button colored a href="https://taskmasterpro.herokuapp.com/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    {/* Project 3 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image3"> Burger App</CardTitle>
                            <CardText>
                                A restaurant app that lets users input the names of burgers they'd like to eat.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/ChanduKoritala/burger.io.git" target= "_blank" rel="noreferrer noopener">GitHub</Button>
                                <Button colored a href="https://desolate-sierra-85419.herokuapp.com/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    {/* Project 4 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image4"> Profile Generator</CardTitle>
                            <CardText>
                                A command-line application that dynamically generates a PDF profile from a GitHub username.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/ChanduKoritala/ProfileGenerator.io.git" target= "_blank" rel="noreferrer noopener" >GitHub</Button>
                                <Button colored a href="https://chandukoritala.github.io/ProfileGenerator.io/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    {/* Project 5 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image5"> Workout Tracker</CardTitle>
                            <CardText>
                                An application to view, create and track daily workouts. A user can log multiple exercises in a workout on a given day. The app will also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, It will track the distance travelled.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/ChanduKoritala/workoutTracker.io.git" target= "_blank" rel="noreferrer noopener">GitHub</Button>
                                <Button colored a href="https://immense-island-07583.herokuapp.com/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    {/* Project 6 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle className="project-image6"> Employee Directory</CardTitle>
                            <CardText>
                            An application to view employee data within an organisation, A manager can 'Filter Employees by Location', 'Sort emplaoyees by Ascending/Descending Order'.
                        </CardText>
                            <CardActions border>
                                <Button colored a href="https://github.com/ChanduKoritala/employeeDirectory.git" target= "_blank" rel="noreferrer noopener">GitHub</Button>
                                <Button colored a href="https://arcane-spire-15439.herokuapp.com/" target= "_blank" rel="noreferrer noopener">Live Demo</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
