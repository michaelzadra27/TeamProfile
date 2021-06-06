module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1>Team Code</h1>
            <p>Coding Squad Bios</p>
        </div>
    </div>
    </header>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

// Create Team Profile
const createTeam = team => {

    // Create Manager Profile
    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${manager.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${manager.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
        `;
    };

    // Create Engineer Profile
    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${engineer.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}
                    </a></li>
                    <li class="list-group-item">Office Number:${engineer.getGithub()}</li>
                  </ul>
                </div>
              </div>
        `;
    };

    // Create Intern Profile
    const generateIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${intern.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
                    <li class="list-group-item">Office Number:${intern.getSchool()}</li>
                  </ul>
                </div>
              </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}