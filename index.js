const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateHTML = require('./src/generateHTML')

const teamInfo = [];
const teamString = teamInfo.toString('')

const questions = [
    {
        type: 'confirm',
        message: 'Create a new team?',
        name: 'newTeam'
    },
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the manager ID.',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the manager email address.',
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the manager's office number.",
        name: 'officeNumber'
    }
]

function managerPrompt () {
    inquirer.prompt(questions).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamInfo.push(manager);
        addMembers();
    })
    
}

function engineerPrompt () {
    inquirer.prompt ([
    {
        type: 'input',
        message: "What is the team-member's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the team-member's ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team-member's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team-member's GitHub username?",
        name: 'gitHub' 
    }
    ]).then((response) => {
        addMembers();
    })
}

function internPrompt () {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the team-member's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team-member's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the team-member's email address?",
            name: 'email'
        },
        {
        type: 'input',
        message: 'What school does the team-member attend?',
        name: 'school' 
        }
    ]).then((response) => {
        addMembers()
    })
}

function addMembers() {
    inquirer.prompt ([
    {
        type: 'list',
        choices: ["Engineer", "Intern", "Finished building my team"],
        message: 'Please list the team member',
        name: 'teamMember'
    }
    ]).then((response) => {
        const htmlPageContent = generateHTML(response); 
        if (response.teamMember === "Engineer") {
            const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)
            engineerPrompt(engineer);
            teamInfo.push(engineer);
        } if(response.teamMember === "Intern") {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            internPrompt(intern);
            teamInfo.push(intern)
        } if (response.teamMember === "Finished building my team") {
            fs.writeFile('./dist/index.html', htmlPageContent, (err) => 
        err ? console.log(err) : console.log('Successfully created team page.')
    );
        }
    })
}

function init() {
    managerPrompt()
}

init();

module.export = teamInfo;