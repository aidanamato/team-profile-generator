const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const ListPrompt = require('inquirer/lib/prompts/list');

class PageGenerator {
  constructor() {
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
        name: 'managerName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
        name: 'managerOfficeNum',
        message: "What is your manager's office number? (Optional)",
      },
    ]).then(managerData => {
        this.managerData = managerData;
        this.promptAddMember();
    });
  }

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
        this.generateHTML(this.managerData, this.engineerDataArr, this.internDataArr);
      }
    });
  }

  getEngineerData() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
      this.engineerDataArr.push(engineerData);
      this.promptAddMember();
    })
  }

  getInternData() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
      this.internDataArr.push(internData);
      this.promptAddMember();
    });
  }

  generateHTML() {
    console.log(this.managerData, this.engineerDataArr, this.internDataArr);
    
  }
}

module.exports = PageGenerator;