import React, {Component} from 'react';
import {Container, Header, Grid, Accordion, Icon, Card, Label, Popup, Segment} from 'semantic-ui-react';
import './Job.css'


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
        const details = this.props.details;
        this.state = {
            details: details,
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
        const details = this.state.details;
        let panelMissions = missions.map((mission, key) => ({
            title: {
                content: mission.title,
                key: 'mission'+key
            },
            content: {
                content: mission.description,
                key: 'content_mission'+key
            }

        }));
        let companyCard =
            <Card>
                <Card.Content>
                    <Card.Header>
                        <a href={details.website} target="_blank">{company}</a>
                    </Card.Header>
                    <Card.Meta>
                        <span>Founded in {details.creationDate}</span>
                    </Card.Meta>
                    <Card.Description>
                        <p>{details.description}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <span><Icon name="users"/> {details.employees} employees</span>

                    </p>
                    <p>
                        <span> <Icon name="code"/> {details.itTeam} developers team</span>
                    </p>
                </Card.Content>
            </Card>;
        return (
            <Container className="jobContainer">
                <Header as="h3">{title}</Header>
                <Grid container={true} divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Container textAlign="left">
                                <div>
                                    <Popup
                                        key={company}
                                        trigger={<strong className="clickable">{company} - {location} ({country})</strong>}
                                        on="click"
                                        content={companyCard}
                                        hideOnScroll
                                    >

                                    </Popup>
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
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Container>
                                <div>
                                    {technicalStack.map((value, key) =>{
                                        return (<Label color="black" key={key}> {value}</Label>)
                                    })}

                                </div>
                                <Accordion styled panels={panelMissions} defaultActiveIndex={0}>
                                </Accordion>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <hr/>
            </Container>
        )
    }
}


export default Job