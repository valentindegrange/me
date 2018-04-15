import React, {Component} from 'react';
import {Container, Card, Header} from 'semantic-ui-react';
import Trip from './Trip'

class Trips extends Component {
    constructor(props) {
        super(props);
        const trips = this.props.trips;

        this.state = {trips: trips}
    }

    render() {
        const trips = this.state.trips;
        return (
            <Container>
                <Header as="h2">Trips</Header>
                <Card.Group>
                    {trips.map((trip, key) => {
                        return <Trip key={key}
                                     title={trip.title}
                                     country={trip.country}
                                     icon={trip.icon }
                                     year={trip.year }
                                     month={trip.month }
                                     cities={trip.cities }
                                     details={trip.details }
                                     image={trip.image }
                                     pictures={trip.pictures }/>
                    })}
                </Card.Group>
            </Container>

        )
    }
}


export default Trips