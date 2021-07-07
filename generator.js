function htmlGenerator(manager_data) {
    console.log(manager_data);
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
}
function internHtmlGenerator(intern_data) {
    console.log(manager_data);
    function internGenerator() {
        return `<div class="col-sm">
        <div class="card-body">
            <h5 class="card-title"> Manager: ${employee_data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">job</h6>
            <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </p>
        </div>
    </div>`
    }
}
function engineerHtmlGenerator(employee_data) {
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
}
function employeeHtmlGenerator(employee_data) {
    for (let i = 0; employee_data.length; i++) {

    }
}

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
            <div class="col-sm">
                <div class="card-body">
                    <h4 class="card-title">nadafdsme</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="col-sm">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </body>
    
    </html>`

module.exports = engineerHtmlGenerator

module.exports = htmlGenerator