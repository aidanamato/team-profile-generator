// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Employee Classes
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// HTML Template
const HtmlTemplate = require('../src/HtmlTemplate');

// Declare PageGenerator class
class PageGenerator {
  constructor() {
    // initialize properties to store employee data
    this.employeeDataArr;
    this.managerData;
    this.engineerDataArr = [];
    this.internDataArr = [];
  }

  launchGenerator() {
    console.log('Welcome to the Team Profile Generator!');
    this.getManagerData();
  }
  
  getManagerData() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the name of your team's manager?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input your manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your manager's employee ID?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please input your manager's employee ID!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your manager's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input your manager's email address!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number? (Optional)",
      },
    ]).then(managerData => {
        // deconstruct managerData answer object
        const {name, id, email, officeNumber} = managerData;
        // store manager data
        this.managerData = new Manager(name, id, email, officeNumber);
        this.promptAddMember();
    });
  }

  // runs after every new employee entry
  promptAddMember() {
    inquirer.prompt({
      type: 'list',
      name: 'addMember',
      message: 'What would you like to do next?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building team']
    }).then(({addMember}) => {
      if (addMember === 'Add an engineer') {
        this.getEngineerData();
      } else if (addMember === 'Add an intern') {
        this.getInternData();
      } else {
        // if user is done entering employees, generate the HTML
        this.generatePage(this.managerData, this.engineerDataArr, this.internDataArr);
      }
    });
  }

  getEngineerData() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input your engineer's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your engineer's employee ID?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please input your engineer's employee ID!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input your engineer's email address!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please input your engineer's GitHub username!");
            return false;
          }
        }
      }
    ]).then(engineerData => {
      // Deconstruct answer object
      const {name, id, email, github} = engineerData;
      // Push engineer to engineer array
      this.engineerDataArr.push(new Engineer(name, id, email, github));
      this.promptAddMember();
    })
  }

  getInternData() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input your intern's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your intern's employee ID?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please input your intern's employee ID!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input your intern's email address!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "What school does your intern attend?",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please input the name of your intern's school!");
            return false;
          }
        }
      }
    ]).then(internData => {
      // deconstruct answer object
      const {name, id, email, school} = internData;
      // push intern to intern array
      this.internDataArr.push(new Intern(name, id, email, school));
      this.promptAddMember();
    });
  }

  generatePage() {
    // set employeeDataArr to contain each Employee object
    this.employeeDataArr = [this.managerData].concat(this.engineerDataArr, this.internDataArr);
    // instantiate HtmlTemplate object
    const htmlObj = new HtmlTemplate;
    // write HTML page
    htmlObj.generateTeamCards(this.employeeDataArr);
  }
}

module.exports = PageGenerator;