const inquirer = require('inquirer');
const output = [];

const employee = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },
    
    {
        type:'input',
        name:'id',
        message:'What is the employee\'s id?',
    },
    {
        type:'input',
        name:'email',
        message:'What is the employee\'s email?',
    },
    {
        type:'input',
        name:'officeNumber',
        message:'What is the employee\'s office number?',
    },
];

const engineer = [
    {
        type:'input',
        name:'gitHub',
        message:'What is the employee\'s github?',
    },
]
const intern = [
    {
        type:'input',
        name:'school',
        message:'What is the employee\'s school?',
    },
]
const finishTeam = [
{
    type: 'confirm',
    name: 'finish',
    message: 'Are you finished making your team?'
}
];
const menu = [
    {
        type:'list',
        name: 'menuChoice',
        message:'Would you like to create a new employee or finish building your team?',
        choices: ['Create new Engineer','Create new Intern','Finish building team']
    },
];