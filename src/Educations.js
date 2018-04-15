import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import Education from './Education.js'


class Educations extends Component {
    constructor(props) {
        super(props);
        const educations = this.props.educations;

        this.state = {
            educations:educations
        }
    }

    render() {
        const educations = this.state.educations;
        return (
            <Container>
                <Header as="h2">Education</Header>
                {educations.map((diploma, key) => {
                    return <Education key={key}
                                      diploma={diploma.diploma}
                                      year={diploma.year}
                                      school={diploma.school}
                                      city={diploma.city}
                                      country={diploma.country}
                                      details={diploma.details}/>
                })}
            </Container>

        )
    }
}


export default Educations