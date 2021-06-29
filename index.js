const fs = require('fs');
const inquirer = require('inquirer')

class  Employee {
constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
class Manager extends Employee{
constructor (officeNumber){
    this.officeNumber = officeNumber;
} 
};
class Engineer extends Employee{
constructor(gitHub){
    this.gitHub = gitHub;
}
}
class Intern extends Employee{
constructor(school){
    this.school = school;
}
}
