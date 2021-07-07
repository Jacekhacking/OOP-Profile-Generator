exports.employee = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
    },
];
exports.manager = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the employee\'s office number?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
    },
];

exports.engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the employee\'s github?',
    },

];
exports.intern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the employee\'s school?',
    },
];
exports.finishTeam = [
    {
        type: 'confirm',
        name: 'finish',
        message: 'Are you finished making your team?'
    }
];
exports.menu = [
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Would you like to create a new employee or finish building your team?',
        choices: ['1. Create new Engineer', '2. Create new Intern', '3. Finish building team']
    },
];