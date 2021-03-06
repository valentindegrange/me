import React, { Component } from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import './App.css';
import Heading from './Heading.js'
import Skills from './Skills.js'
import Educations from './Educations.js'
import Jobs from './Jobs.js'
import Trips from './Trips.js'
import fin from './images/finland.jpg'
import fin1 from './images/details/fin1.jpg'
import fin2 from './images/details/fin2.jpg'
import fin3 from './images/details/fin3.jpg'
import us from './images/us.jpg'
import us1 from './images/details/us1.jpg'
import us2 from './images/details/us2.jpg'
import us3 from './images/details/us3.jpg'
import india from './images/india.jpg'
import india1 from './images/details/india1.jpg'
import india2 from './images/details/india2.jpg'
import india3 from './images/details/india3.jpg'
import jordan from './images/jordan.jpg'
import jordan1 from './images/details/jordan1.jpg'
import jordan2 from './images/details/jordan2.jpg'
import jordan3 from './images/details/jordan3.jpg'
import russia from './images/russia.jpg'
import russia1 from './images/details/russia1.jpg'
import russia2 from './images/details/russia2.jpg'
import russia3 from './images/details/russia3.jpg'
import africa from './images/africa.jpg'
import africa1 from './images/details/africa1.jpg'
import africa2 from './images/details/africa2.jpg'
import africa3 from './images/details/africa3.jpg'


const user = {
    address: "93 rue ordener",
    city: "75018 Paris",
    country: "France",
    github: "valentindegrange",
    mail: "valentin.degrange@gmail.com",
    phone: "(+33)6 1780 6702",
    title: "Valentin DEGRANGE",
    quote: "There is no problem. There is only a solution to be found."
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
    details: null
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

class Trip {
    constructor(title, country, icon, year, month, cities, details, image, pictures) {
        this.title = title;
        this.country = country;
        this.icon = icon;
        this.year = year;
        this.month = month;
        this.cities = cities;
        this.details = details;
        this.image = image;
        this.pictures = pictures;
    }
}

const laplandTrip = new Trip("Lapland", "Finland", "finland", 2018, "03",
    ["Kittila", "Muonio", "Rovaniemi", "Enontekio"], "Road trip. Snow mobile. Reindeers. Northern lights. ",
    fin, [fin1, fin2, fin3]);
const newYorkTrip = new Trip("New York", "United States", "america", 2017, "11",
    ["New York"], "Musuems. NBA. Liberty statue.",
    us, [us1, us2, us3]);
const indiaTrip = new Trip("India", "India", "india", 2017, "08",
    ["Mumbai", "Goa", "Hampi", "Madurai", "Cochin", "Munnar", "Kumily"], "Train & buses trip. Temples. Animals. Palaces.",
    india,  [india1, india2, india3]);
const jordanTrip = new Trip("Jordan", "Jordan", "jordan", 2017, "05",
    ["Madaba", "Dead Sea", "Mujib", "Aqaba", "Wadi Rum"], "Road trip. Desert. Canyoning. Villages. Diving",
    jordan, [jordan1, jordan2, jordan3]);
const russiaTrip = new Trip("St Petersburg", "Russia", "russia", 2017, "01",
    ["St Petersburg"], "Museum. Churches. Palaces.",
    russia, [russia1, russia2, russia3]);
const southAfricaTrip = new Trip("South Africa", "South Africa", "za", 2016, "08",
    ["Johannesburg", "Durban", "Sainte Lucie", "Shazibe", "Malelane", "Kruger National Park", "Blyde River canyon" ],
    "Road trip. Animals. Mountains. National park. Hippopotamus. Canyons. Diving",
    africa, [africa1, africa2, africa3]);

const trips = [laplandTrip, newYorkTrip, indiaTrip, jordanTrip, russiaTrip, southAfricaTrip];

class App extends Component {
    state = {activeItem: 'Work Experience'};

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name});
    };

    render() {
        const activeItem = this.state.activeItem;
        const skillComponent = <Skills index = {0}
                                  frontend={skills.frontend}
                                  backend={skills.backend}
                                  developmentTools={skills.developmentTools}
                                  manager={skills.manager}
                                  databases={skills.databases}
        />;
        const jobComponent = <Jobs index={1} jobs={pastJobs}/>;
        const educationComponent = <Educations index={2} educations={diplomas}/>;
        const tripComponent = <Trips index={3} trips={trips}/>;
        let mapCmpnt = {
            "Skills": skillComponent,
            "Work Experience": jobComponent,
            "Education": educationComponent,
            "Trips": tripComponent
        };
        return (
            <div>

                <Heading title={user.title} address={user.address} city={user.city} country={user.country} phone={user.phone} mail={user.mail} github={user.github} quote={user.quote}/>
                <hr/>
                <Menu pointing>
                    <Menu.Item name="Skills"
                               active={activeItem === 'Skills'} onClick={this.handleItemClick}/>
                    <Menu.Item name="Work Experience"
                               active={activeItem === 'Work Experience'} onClick={this.handleItemClick}/>
                    <Menu.Item name="Education"
                               active={activeItem === 'Education'} onClick={this.handleItemClick}/>
                    <Menu.Item name="Trips"
                               active={activeItem === 'Trips'} onClick={this.handleItemClick}/>
                </Menu>
                <Segment>
                    {mapCmpnt[activeItem]}
                </Segment>

            </div>
        );
    }
}

export default App;
