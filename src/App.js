import React, { Component } from 'react';
import './App.css';
import Heading from './Heading.js'
import Job from './Job.js'

const user = {
    address: "93 rue ordener",
    city: "75018 Paris",
    country: "France",
    github: "valentindegrange",
    mail: "valentin.degrange@gmail.com",
    phone: "(+33)6 1780 6702",
    title: "Valentin DEGRANGE"
};
const pastJobs = [{
    title:"Full stack engineer",
    company:"Hxperience",
    location:"Paris",
    country:"France",
    startDate:"Feb 2016",
    endDate:"Current",
    technicalStack:["Django", "AngularJS", "JIRA", "CloudFoundry"],
    missions:["IoT platform", "REST API", "Multi tenancy", "RBAC & SSO", "Third Party IoT platforms", "Devops", "Dataviz"]
}];

class App extends Component {
    render() {
        return (
            <div>
                <Heading title={user.title} address={user.address} city={user.city} country={user.country} phone={user.phone} mail={user.mail} github={user.github}/>
                <hr/>
                {pastJobs.map((job, key) => {
                    return <Job key={key} title={job.title}
                                company={job.company} location={job.location}
                                country={job.country} startDate={job.startDate}
                                endDate={job.endDate} technicalStack={job.technicalStack}
                                missions={job.missions} />
                })}
            </div>
        );
    }
}

export default App;
