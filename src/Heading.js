import React, { Component } from 'react';
import {Container, Header, Grid, Icon } from 'semantic-ui-react'

class Heading extends Component {
    render(){
        return (
            <Grid container={true} divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Container textAlign="left">
                            <div>
                                <span className="address"><Icon name="address card"/>93 rue ordener 75018 Paris (France)</span><br/>
                                <span className="phone"><Icon name="phone" />(+33)6 1780 6702</span><br/>
                            </div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign="center">
                            <Header as='h1'>Valentin DEGRANGE</Header>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign="right">
                            <span className="mail"><Icon name="mail" />valentin.degrange@gmail</span><br/>
                            <span clas="github"><Icon name="github"/>https://github.com/valentindegrange</span>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Heading