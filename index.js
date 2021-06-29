const fs = require('fs');
const inquirere = require('inquirer')

const promptQuestions = [
    {
        type: "input",
        name: "teamManagerName",
        message: "What is the team manager's name?"
    },

    {
        type: "input",
        name: "teamManagersID",
        message: "what is the team manager's employee ID?"
    },

    {
        type: "input",
        name: "teamManagersEmail",
        message: "What is the team manager's Email?"
    },
    {
        type: "input",
        name: "teamManagersOfficeNumber",
        message: "What is the team manager's office number?"
    },

    {
        type: "input",
        name: "engineersName",
        message: "What is the engineer's name?"
    },

    {
        type: "input",
        name: "engineersID",
        message: "What is the engineer's employee ID?"
    },

    {
        type: "input",
        name: "engineersEmail",
        message: "What is the engineer's Email?"
    },
    {
        type: "input",
        name: "engineersGitHub",
        message: "What is the engineer's gitHub username?"
    },

    {
        type: "input",
        name: "internsName",
        message: ""
    },

    {
        type: "input",
        name: "internsID",
        message: "What is the intern's employee ID?"
    },

    {
        type: "input",
        name: "internsEmail",
        message: "What is the intern's Email?"
    },

    {
        type: "input",
        name: "internsSchool",
        message: "What is the intern's school?"
    },

]