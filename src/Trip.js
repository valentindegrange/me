import React, {Component} from 'react';
import {Flag, Card, Image} from 'semantic-ui-react';

class Trip extends Component {
    constructor(props) {
        super(props);
        const title = this.props.title;
        const country = this.props.country;
        const icon = this.props.icon;
        const year = this.props.year;
        const month = this.props.month;
        const cities = this.props.cities;
        const details = this.props.details;
        const image = this.props.image;
        const pictures = this.props.pictures;

        this.state = {
            title:title,
            country:country,
            icon:icon,
            year:year,
            month:month,
            cities:cities,
            details:details,
            image:image,
            pictures:pictures
        }
    }

    render() {
        const title = this.state.title;
        const country = this.state.country;
        const icon = this.state.icon;
        const year = this.state.year;
        const month = this.state.month;
        const cities = this.state.cities;
        const details = this.state.details;
        const image = this.state.image;
        const pictures = this.state.pictures;
        return (
            <Card>
                <Card.Content>
                    <Image src={image}/>
                    <Card.Header>
                        <Flag name={icon} title={country}/>{title}

                    </Card.Header>
                    <Card.Meta>
                        <p><strong>{country} - {month}/{year}</strong></p>
                        <p>{cities.map((item, key) => {
                        return <span key={key}> {item}{key < cities.length - 1 ? ', ' : null}</span>
                        })}</p>
                    </Card.Meta>
                    <Card.Description>
                        {details}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Image.Group>
                        {pictures.map((img, key) => {
                            return <Image key={key} src={img}/>
                        })}
                    </Image.Group>
                </Card.Content>
            </Card>
        )
    }
}


export default Trip