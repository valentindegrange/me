import React, { Component } from 'react';
import {Container, Header, Grid, Icon } from 'semantic-ui-react'

class Heading extends Component {
    constructor(props){
        super(props);
        const address = this.props.address;
        const city = this.props.city;
        const country = this.props.country;
        const mail = this.props.mail;
        const github = this.props.github;
        const phone = this.props.phone;
        const title = this.props.title;
        const quote = this.props.quote;
        this.state = {
            address:address,
            city: city,
            country: country,
            github:github,
            mail:mail,
            phone:phone,
            title:title,
            quote:quote
        }
    }
    render(){

        const address = this.state.address;
        const city = this.state.city;
        const country = this.state.country;
        const github = this.state.github;
        const mail = this.state.mail;
        const phone = this.state.phone;
        const title = this.state.title;
        const quote = this.state.quote;
        const gmaps = address.split(' ').join('+') + ',' + city.split(' ').join('+');
        return (
            <Grid container={true} divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Container textAlign="left">
                            <Container>
                                <div className="address">
                                    <Icon name="address card"/><a href={"https://www.google.com/maps/place/" + gmaps} target="_blank" >
                                    <span>{address}</span> - <span>{city} - ({country})</span>
                                </a>
                                </div>
                            </Container>
                            <span className="phone"><Icon name="phone" />{phone}</span>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign="center">
                            <Header as='h1'>
                                {title}
                            </Header>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign="right">
                            <span className="mail"><Icon name="mail" /><a href={"mailto:" + mail}>{mail}</a></span><br/>
                            <span className="github"><Icon name="github"/><a href={"https://github.com/" + github} target="_blank">{github}</a></span>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Container textAlign="center">
                            <Header as="h2">
                                <Header.Subheader>
                                    <span><Icon name="quote left"/>&nbsp;{quote}&nbsp;<Icon name="quote right"/></span>
                                </Header.Subheader>
                            </Header>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Heading