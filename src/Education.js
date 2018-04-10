import React, {Component} from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';

class Education extends Component {
    constructor(props) {
        super(props);
        const diploma = this.props.diploma;
        const year = this.props.year;
        const school = this.props.school;
        const city = this.props.city;
        const country = this.props.country;
        const details = this.props.details;

        this.state = {
            diploma: diploma,
            year: year,
            school: school,
            city: city,
            country: country,
            details: details
        }
    }

    render() {
        const diploma = this.state.diploma;
        const year = this.state.year;
        const school = this.state.school;
        const city = this.state.city;
        const country = this.state.country;
        const details = this.state.details;

        return (
            <Container>
                <Header as="h3">{diploma}</Header>
                <Grid container={true} divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Container textAlign="left">
                                <div><strong>{school} - {city} ({country})</strong></div>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign="right">
                                <div>
                                    <p>{year}</p>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        )
    }
}


export default Education