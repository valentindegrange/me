import React, {Component} from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';
import Job from './Job.js'

class Jobs extends Component {
    constructor(props) {
        super(props);
        const jobs = this.props.jobs;

        this.state = {
            jobs: jobs
        }
    }

    render() {
        const jobs = this.state.jobs;
        return (
            <Container>
                <Header as="h2">Work experiences</Header>
                {jobs.map((job, key) => {
                    return <Job key={key} title={job.title}
                                company={job.company} location={job.location}
                                country={job.country} startDate={job.startDate}
                                endDate={job.endDate} technicalStack={job.technicalStack}
                                missions={job.missions} details={job.details}/>
                })}
            </Container>
        )
    }
}


export default Jobs