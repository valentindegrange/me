import React, { Component } from 'react';
import './App.css';
import Heading from './Heading.js'
import Job from './Job.js'
import Skills from './Skills.js'
import Education from './Education.js'

const user = {
    address: "93 rue ordener",
    city: "75018 Paris",
    country: "France",
    github: "valentindegrange",
    mail: "valentin.degrange@gmail.com",
    phone: "(+33)6 1780 6702",
    title: "Valentin DEGRANGE"
};
const skills = {
    backend: {
        technologies: [
            {
                name: "Python",
                icon: "python",
                frameworks: ["Django", "Django REST framework", "pytest"]
            },
            {
                name: "PHP",
                icon: "php"
            }
        ]
    },
    frontend: {
        technologies: [
            {
                name: "HTML",
                icon: "html5",
                frameworks: ["Bootstrap"]
            },
            {
                name: "Javascript",
                icon: "angular",
                frameworks: ["AngularJS", "Highcharts", "Restangular", "UI-Router"]

            },
            {
                name: "CSS",
                icon: "less",
                frameworks: ["less"]
            }
        ]
    },
    developmentTools: [
        {
            name: "Git/Github",
            icon: "github"
        },
        {
            name: "JIRA"
        },
        {
            name: "Gulp",
            icon: "gulp"
        },
        {
            name: "Bash",
            icon: "terminal"
        },
        {
            name: "CloudFoundry"
        },
        {
            name: "IBM Cloud"
        }
    ],
    databases: [{name: "Postgresql", icon: "database"}, {name: "CouchDB", icon:"file"}],
    manager: {}
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
            description:"Designing, developing and maintaining an IoT platform that connects & monitors sensors, collects & processes data, for further usage analysis / KPI computations." +
            " Building and  adapting the product for clients such as Accor, Renault, Atlantic, Schneider Electric."
        },
        {
            title:"REST API",
            description: "Designing and implementing a REST API to allow communications between front-end & back-end."
        },
        {
            title:"Multi tenancy",
            description: "Designing  and implementing multi tenancy to handle multiple clients on same instance."
        },
        {
            title:"RBAC & SSO",
            description: "Implementing RBAC and SSO, handling hundreds of users per clients."
        },
        {
            title:"Third Party IoT platforms",
            description: "Integrating Third Party IoT platforms in the product. Platforms such as Sigfox, Orange, Kerlink, Objenious."
        },
        {
            title:"DevOps",
            description: "Automating front-end production-reading builds and deployments, reducing deployment routines time by 6."
        },
        {
            title:"Data visualization",
            description: "Handling sensors data querying and front end data visualization with NoSQL databases containing each more than 20 million data."
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
        {title:"Company website", description: "Designed, implemented  and deployed the new company website(selling professional trainings)resulting in a 50% increasement in daily users."},
        {title:"Java application", description: "Created a Java application to import and export data from company database to french government database.  Automating the weekly data export for more than 80 different candidates."},
        {title:"Improve web apps", description: "Improved existing web applications used by 60 persons according to their feedbacks. "}
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
        {title:"Mockup", description: "Mocked-up the new software downloading platform used by more than 10.000 users daily."},
        {title:"Weekly meetings", description: "Analysed platform needs, resulting in weekly meetings with students, teachers and software managers."},
        {title:"Platform architecture", description: "Created the architecture of the platform collaborating with the whole team in charge of the project."}
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

const polytechDiploma = {
    diploma: "Master of Science in Computer Sciences",
    year: 2016,
    school: "Engineering school Polytech Lyon",
    city: "Lyon",
    country: "France",
    details: ""
};

const dutDiploma = {
    diploma: "2 years technical degree in Computer Sciences",
    year: 2012,
    school: "University Institute of Technology of Burgundy",
    city: "Dijon",
    country: "France",
    details: "Graduated in the top 20 (over more than 150 students)"
};

const diplomas = [polytechDiploma, dutDiploma];

class App extends Component {
    render() {
        return (
            <div>
                <Heading title={user.title} address={user.address} city={user.city} country={user.country} phone={user.phone} mail={user.mail} github={user.github}/>
                <hr/>
                <Skills
                    frontend={skills.frontend}
                    backend={skills.backend}
                    developmentTools={skills.developmentTools}
                    manager={skills.manager}
                    databases={skills.databases}
                />
                {pastJobs.map((job, key) => {
                    return <Job key={key} title={job.title}
                                company={job.company} location={job.location}
                                country={job.country} startDate={job.startDate}
                                endDate={job.endDate} technicalStack={job.technicalStack}
                                missions={job.missions} details={job.details}/>
                })}
                {diplomas.map((diploma, key) => {
                    return <Education key={key}
                                      diploma={diploma.diploma}
                                      year={diploma.year}
                                      school={diploma.school}
                                      city={diploma.city}
                                      country={diploma.country}
                                      details={diploma.details}/>
                })
                }
            </div>
        );
    }
}

export default App;
