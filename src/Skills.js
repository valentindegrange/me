import React, {Component} from 'react';
import {Container, Message, Item, Header, Grid, Accordion, Icon, Card, Label, Popup} from 'semantic-ui-react';
import SkillItem from './SkillItem'

class Skills extends Component {
    constructor(props) {
        super(props);
        const backend = this.props.backend;
        const frontend = this.props.frontend;
        const developmentTools = this.props.developmentTools;
        const manager = this.props.manager;
        const databases = this.props.databases;

        this.state = {
            backend: backend,
            frontend: frontend,
            developmentTools: developmentTools,
            manager: manager,
            databases: databases
        }
    }

    render() {
        const backend = this.state.backend;
        const frontend = this.state.frontend;
        const developmentTools = this.state.developmentTools;
        const manager = this.state.manager;
        const databases = this.state.databases;
        const skillsList = [
            "Frontend: " + frontend.technologies.map(tech => {return tech.name}).join(', '),
            "Backend: " + backend.technologies.map(tech => {return tech.name}).join(', '),
            databases.join(', ')
        ];
        return (
            <Container>
                <Header as="h2">Skills</Header>
                <Item.Group>
                    <SkillItem header="Frontend" content={frontend.technologies}/>
                    <SkillItem header="Backend" content={backend.technologies}/>
                    <SkillItem header="Development tools" content={developmentTools}/>
                    <SkillItem header="Databases" content={databases}/>
                </Item.Group>
                <hr/>
            </Container>
        )
    }
}


export default Skills