const { intern } = require("./prompts");

function htmlGenerator(manager_data, employee_data) {
    function managerGenerator() {
        return `<div class="col-sm">
        <div class="card-body">
            <h5 class="card-title"> Manager: ${manager_data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">job</h6>
            <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                <h5 class="card-title"> Manager: ${intern.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">job</h6>
                <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
                </div>
                </div>`
            })
            return internsHtml.join("")
            };
    function engineerGenerator() {
        var engineer = employee_data.filter(employee => {employee.role === "Engineer"}) 
        console.log("interns" + " " + engineer[0].name);
            var engineerHtml = engineer.map(function(engineer){
                return `<div class="col-sm">
                <div class="card-body">
                <h5 class="card-title"> Manager: ${engineer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">job</h6>
                <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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