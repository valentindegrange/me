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
const jobHx = {
    title:"Full stack engineer",
    company:"Hxperience",
    location:"Paris",
    country:"France",
    startDate:"Feb 2016",
    endDate:"Current",
    technicalStack:["Django", "AngularJS", "JIRA", "CloudFoundry"],
    missions:[
        {
            title:"IoT platform",
            description:"Design, develop and maintain an IoT platform that connects & monitors sensors, collects & processes data, allows usage analysis, calculates KPIs. Build & adapt the product for clients such as Accor, Renault, Atlantic, Schneider Electric"},
        {
            title:"REST API",
            description: "Implement a REST API to allow communication between front-end & back-end of the product"
        },
        {
            title:"Multi tenancy",
            description: "Design and and implement multi tenancy to allow multiple clients handling on same instances"
        },
        {
            title:"RBAC & SSO",
            description: "Implement RBAC and SSO, dealing with more than 100 users per clients"
        },
        {
            title:"Third Party IoT platforms",
            description: "Integrate Third Party IoT platforms into the product. Platforms such as Sigfox, Orange, Kerlink, Objenious"
        },
        {
            title:"DevOps",
            description: "Automate front-end production-reading building and deployments, reducing deployment routines time by 6"
        },
        {
            title:"Datavisualization",
            description: "Handle sensors data querying and front end data visualization with NoSQL databases containing each more than 20 million data"
        }
    ],
    details: {
        employees: 15,
        itTeam: 8,
        creationDate: 2015,
        description: "",
        website: "https://hxperience.com",
        other: ""
    }
};

const jobAcfal = {
    title:"Full stack developer",
    company:"Acfal formation",
    location:"Lyon",
    country:"France",
    startDate:"Sep 2014",
    endDate:"Aug 2015",
    technicalStack:["PHP", "Wordpress", "Java", "HTML", "CSS"],
    missions:[
        {title:"Company website", description: "Design, develop and deploy the new website of the company. It was meant to sell professional trainings. After being online it was having more than 350 daily users, a 50% increase from previous version"},
        {title:"Java application", description: "Create Java application to import and export data from company database to french government database.  Automating the weekly data exporting for more than 80 different candidates"},
        {title:"Improve web apps", description: "Improve existing web applications according to users requirements and used by 60 persons"}
    ],
    details: {
        employees: 60,
        itTeam: 2,
        creationDate: 1987,
        description: "",
        website: "https://acfal.com/",
        other: ""
    }
};

const jobBath = {
    title:"Web developer",
    company:"Bath University",
    location:"Bath",
    country:"United Kingdoms",
    startDate:"Feb 2012",
    endDate:"July 2012",
    technicalStack:[".NET", "Javascript", "HTML", "CSS"],
    missions:[
        {title:"Mockup", description: "Mockup the new software downloading platform. Platform daily used by more than 10.000 users"},
        {title:"Platform architecture", description: "Create the architecture of the platform with the whole team in charge of the project"},
        {title:"Weekly meetings", description: "Analyse the needs of the platform. Weekly meetings with students, teachers and software managers"},
    ],
    details: {
        employees: "+100",
        itTeam: 7,
        creationDate: 1966,
        description: "",
        website: "http://www.bath.ac.uk/",
        other: ""
    }
};

const pastJobs = [jobHx, jobAcfal, jobBath];

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
                                missions={job.missions} details={job.details}/>
                })}
            </div>
        );
    }
}

export default App;
