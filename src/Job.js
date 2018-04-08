import React, {Component} from 'react';
import {Container, Header, Grid} from 'semantic-ui-react'


class Job extends Component {
    constructor(props){
        super(props);
        const title = this.props.title;
        const company = this.props.company;
        const location = this.props.location;
        const country = this.props.country;
        const startDate = this.props.startDate;
        const endDate = this.props.endDate;
        const technicalStack = this.props.technicalStack;
        const missions = this.props.missions;
        this.state = {
            title: title,
            company: company,
            location:location,
            country: country,
            startDate:startDate,
            endDate:endDate,
            technicalStack: technicalStack,
            missions:missions
        };
    }
    render() {
        const title = this.state.title;
        const company = this.state.company;
        const location = this.state.location;
        const country = this.state.country;
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        const technicalStack = this.state.technicalStack;
        const missions = this.state.missions;
        return (
            <Container className="jobContainer">
                <Header as="h2">{title}</Header>
                <Grid container={true} divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Container textAlign="left">
                                <div>
                                    <p>{company} - {location} ({country})</p>
                                </div>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign="right">
                                <div>
                                    <p>{startDate} to {endDate}</p>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Container>
                            <p><strong>Technical Stack:
                                {technicalStack.map((value, key) =>{ return (<span key={key}> {value}</span>)})}

                            </strong></p>
                            <div>
                                {missions.map((value, key) => {return(<p key={key}>{value}</p>)})}
                            </div>
                        </Container>
                    </Grid.Row>
                </Grid>
                <hr/>
            </Container>
        )
    }
}


export default Job