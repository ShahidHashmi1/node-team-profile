const inquirer = require('inquirer');
const teamInfo = [];

const questions = [
    {
        type: 'input',
        message: 'Create a new team?',
        name: 'new-team'
    },
    {
        type: 'input',
        message: 'Create a new team?',
        name: 'new-team'
    },
    {
        type: 'input',
        message: 'Create a new team?',
        name: 'new-team'
    },
    {
        type: 'input',
        message: 'Create a new team?',
        name: 'new-team'
    },
    {
        type: 'list',
        choices: ["Engineer", "Intern", "Finished building my team"],
        message: 'Create a new team?',
        name: 'teamMember'
    },
]

function engineerPrompt () {
    inquirer.prompt ([
        {
           type: 'input',
           message: 'What is your name?',
           name: 'name' 
        },
        {
           type: 'input',
           message: 'What is your email address?',
           name: 'email' 
        },
        {
           type: 'input',
           message: 'What is your ID number?',
           name: 'id' 
        },
        {
           type: 'input',
           message: 'What is your GitHub username?',
           name: 'gitHubName' 
        },
    ])
}

const userQuestions = function() {
    return inquirer.prompt(questions).then((answers) => {
        if (answers.teamMember === "Engineer") {
            engineerPrompt();
        }
        
        else if (answers.teamMember === "Finished building my team") {
            // write function
        }
    })
}

function init() {
    userQuestions()
}

init();
