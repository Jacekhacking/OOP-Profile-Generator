const { intern } = require("./prompts");

function htmlGenerator(manager_data, employee_data) {
    function managerGenerator() {
        return `<div class="col-sm">
        <div class="card-body">
            <h5 class="card-title"> Manager: ${manager_data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager_data.id}</h6>
            <p class="card-text">
                Manager office number: ${manager_data.officeNumber}
                Contact: ${manager_data.email}
            </p>
        </div>
    </div>`
    }

    function internGenerator() {
        var interns = employee_data.filter(function (employee) {
            return employee.role === "Intern"
        })
            var internsHtml = interns.map(function(intern){
                return `<div class="col-sm">
                <div class="card-body">
                <h5 class="card-title"> Intern: ${intern.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: ${intern.id}</h6>
                <p class="card-text">
                ${intern.name} is a new intern at our company. Potential future with company is still undecided. You can reach them at ${intern.email} and they are currently attending or have graduated from ${intern.school}
                </p>
                </div>
                </div>`
            })
            return internsHtml.join("")
            };
    function engineerGenerator() {
        var engineer = employee_data.filter( function (employee) { return employee.role === "Engineer"}) 
            var engineerHtml = engineer.map(function(engineer){
                return `<div class="col-sm">
                <div class="card-body">
                <h5 class="card-title"> Engineer: ${engineer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: ${engineer.id}</h6>
                <p class="card-text">
                ${engineer.name} is an engineer at our company. You can reach them at ${engineer.email} and their github is ${engineer.github}.
                </p>
                </div>
                </div>`
            })
            return engineerHtml.join("")}

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    </head>
    
    <body>
        <div class="container">
            ${managerGenerator()}
            ${internGenerator()}
            ${engineerGenerator()}
    </div>
    </body>
    
    </html>`
}

module.exports = htmlGenerator