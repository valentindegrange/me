import React, {Component} from 'react';
import {Container, Item, Header} from 'semantic-ui-react';
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
        const databases = this.state.databases;
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