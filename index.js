const fs = require('fs');
const inquirer = require('inquirer')
const prompts = require('./prompts')
var manager_data
var employee_data
const htmlGenerator = require('./generator')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
};
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }
}
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
}

function askOther() {
    inquirer.prompt(prompts.menu).then(function (data) {
        var nextPrompt
        switch (data.menuChoice[0]) {
            case '1':
                nextPrompt = prompts.engineer
                break;

            case '2':
                nextPrompt = prompts.intern
                break;

            default:
                // const renderedHtml = htmlGenerator(manager_data);
                // fs.writeFileSync('./newReadMe.md', renderedHtml)
                console.log(employee_data);
                return;
        }
        inquirer.prompt(nextPrompt).then(function (data) {
            console.log(data);

            // save data 
            if (data.gitHub != undefined) {
                employee_data.push(new Engineer(data.name, data.id, data.email, data.gitHub))

            } else if (data.school != undefined) {
                employee_data.push(new Intern(data.name, data.id, data.email, data.school))
            }

            // ask for another employee
            askOther();
        })
    })
    // .then(() => {
    //     console.log(data.name);
    //     // output.push(new Manager(data.name, data.id, data.email, data.officeNumber))
    // })
};
function runApp() {
    inquirer.prompt(prompts.manager).then((data) => {
        manager_data = new Manager(data.name, data.id, data.email, data.officeNumber);
        askOther();
        console.log("here");
    })
    // ask for employee data
    // todo: write the file

};
runApp();