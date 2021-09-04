class HtmlTemplate {
  // generates the HTML page
  generateHTML(employeeDataArr) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
${this.generateTeamCards(employeeDataArr)}
    </main>
  </body>
</html>`;
  }

  // generates the team member cards in HTML
  generateTeamCards(employeeDataArr) {
    const teamCardsHtml = '';
    // for each employee in the array, create an info card in the HTML
    for (let i =0; i < employeeDataArr.length; i++) {
      // if manager
      if (employeeDataArr[i].getRole() === 'Manager') {
        const {name, id, email, officeNumber} = employeeDataArr;
        teamCardsHtml =+ `
    <div class="team-member">
      <div class="member-title">
        <h2>${name}</h2>
        <h3>Manager</h3>
      </div>
      <div class="member-info-container">
        <div class="member-info">
          <p>ID: ${id}</p>
          <p>Email: <a href="mailto:${email}">${email}</a></p>
          <p>Office: ${officeNumber}</p>
        </div>
      </div>
    </div>`;
        // if engineer
      } else if (employeeDataArr[i].getRole() === 'Engineer') {
        const {name, id, email, github} = employeeDataArr;
        teamCardsHtml =+ `
    <div class="team-member">
      <div class="member-title">
        <h2>${name}</h2>
        <h3>Engineer</h3>
      </div>
      <div class="member-info-container">
        <div class="member-info">
          <p>ID: ${id}</p>
          <p>Email: <a href="mailto:${email}">${email}</p>
          <p>Github: ${github}</p>
        </div>
      </div>
    </div>`;
        // if intern
      } else if (employeeDataArr[i].getRole() === 'Intern') {
        const {name, id, email, school} = employeeDataArr;
        teamCardsHtml =+ `
    <div class="team-member">
      <div class="member-title">
        <h2>${name}</h2>
        <h3>Intern</h3>
      </div>
      <div class="member-info-container">
        <div class="member-info">
          <p>ID: ${id}</p>
          <p>Email: <a href="mailto:${email}">${email}</p>
          <p>School: ${school}</p>
        </div>
      </div>
    </div>`;
      }
    }
  }
}

module.exports = HtmlTemplate;