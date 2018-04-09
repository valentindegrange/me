import React, {Component} from 'react';
import {Item, Icon, List} from 'semantic-ui-react';


class SkillItem extends Component {
    constructor(props) {
        super(props);
        const header = this.props.header;
        const content = this.props.content;

        this.state = {
            header: header,
            content: content
        }
    }

    render() {
        const header = this.state.header;
        const content = this.state.content;
        return (
            <Item>
                <Item.Content>
                    <Item.Header>
                        {header}
                    </Item.Header>
                    <Item.Meta>
                        {content.map(item => {
                            if(item.hasOwnProperty("icon")){
                                return <Icon name={item.icon} title={item.name}/>
                            }
                        })}
                    </Item.Meta>
                    <Item.Description>
                        <List>
                            {content.map(item =>{
                                return (
                                    <List.Item>
                                        <p><Icon name={item.icon}/> <strong>{item.name}</strong>
                                        {item.frameworks ?
                                            item.frameworks.map(framework => {return<span>{framework}</span>}) :
                                        null}
                                        </p>
                                    </List.Item>
                                )
                            })}
                        </List>

                    </Item.Description>
                </Item.Content>
            </Item>
        )
    }
}


export default SkillItem