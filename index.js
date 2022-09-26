const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Egineer');

const teamInfo = [];

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

function addMembers() {
    inquirer.prompt ([
    {
        type: 'list',
        choices: ["Engineer", "Intern", "Finished building my team"],
        message: 'Please list the team member',
        name: 'teamMember'
    }
    ]).then((response) => {
        if (response.teamMember === "Engineer") {
            engineerPrompt();
        } if(response.teamMember === "Intern") {
            internPrompt();
        } if (response.teamMember === "Finished building my team") {
            fs.writeFile('./dist/index.html', userAnswers(answers), (err) => 
        err ? console.log(err) : console.log('Successfully created index.html')
    );
        }
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
        name: 'gitHubName' 
    }
    ]).then((response) => {
        addMembers();
    })
}
// function managerPrompt () {
//     inquirer.prompt ([
//         {
//            type: 'input',
//            message: 'What is your office number?',
//            name: 'offceNumber'
//         },
//     ])
// }
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

// const userAnswers = (answers) => {
//     teamInfo.append(inquirer.prompt(questions).then((answers)))

// console.log(teamInfo);

// const userPrompt = function() {
//     return inquirer.prompt(questions).then((answers) => {
//         if (answers.teamMember === "Engineer") {
//             engineerPrompt();
//         } if(answers.teamMember === "Intern") {
//             internPrompt();
//         } if (answers.teamMember === "Finished building my team") {
//             fs.writeFile('./dist/index.html', userAnswers(answers), (err) => 
//         err ? console.log(err) : console.log('Successfully created index.html')
//     );
//         }
//     })
// }

// function addEngineer () {
//     inquirer.prompt(questions).then(reponse => {
//         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)

//     })
// }

function init() {
    managerPrompt()
}

init();

// .then(response => {
//     const engineer = new Engineer(response.name, response.id, response.email, response.gitHubName)
//     teamInfo.push(engineer);
// })

// .then(response => {
//     const intern = new Intern(response.name, response.id, response.email, response.school)
//     teamInfo.push(intern);
// })