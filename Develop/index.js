const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')



const render = require('./src/page-template.js');

//grabbing inquirer to ask the questions
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

var memberObjects = []

function init() {
  

  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the Manager name?',
    },

    {
      type: 'input',
      name: 'managerID',
      message: 'What is the Manager ID?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is the Manager email?',
    },
    {
      type: 'input',
      name: 'managerNumber',
      message: 'What is the number for the Manager?',
    },


  ])

    //Pushing info from manager prompt in Manager constructor to create object with properties and values of the answers
    .then((data) => {
      const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerNumber);
      memberObjects.push(manager);
      addMember();




      

     
    })

  function addMember() {
    inquirer.prompt([

      {
        type: "list",
        name: "teamChoice",
        message: "Who would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "End application",
        ]
      }


    ]).then(pick => {
      switch (pick.teamChoice) {
        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          newHTML();
          console.log(memberObjects)
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineer name?',
      },

      {
        type: 'input',
        name: 'engineerID',
        message: 'What is the Engineer ID?',
      },

      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer email?',
      },

      {
        type: 'input',
        name: 'engineerGit',
        message: 'What is the engineer Github Username?',
      },


    ]).then((data) => {
      const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGit);
      memberObjects.push(engineer);
      addMember();

    })

   
  }



  function addIntern(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'What is the Intern name?',
      },

      {
        type: 'input',
        name: 'internID',
        message: 'What is the Intern ID?',
      },

      {
        type: 'input',
        name: 'internEmail',
        message: 'What is the Intern email?',
      },

      {
        type: 'input',
        name: 'internSchool',
        message: 'What is the Intern School?',
      },
      
      
    ]).then((data)=> {
      const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
      memberObjects.push(intern);
      addMember();
      console.log(memberObjects)
    })
  }

    // function newHTML (){
    //   newHTML = `ligma`
    //          fs.writeFileSync('teampage.html', newHTML, (err) =>
    //            err ? console.log(err) : console.log('Success!')
    //         );
    //         //console.log(manager.getName())
    // }

    function newHTML() {

      // Create dist directory for index.html if it doesnt exist
      if (!fs.existsSync(DIST_DIR)) {
          fs.mkdirSync(DIST_DIR)
      }
      console.log("Generating Team Profile.... ");
      fs.writeFileSync(outputPath, render(memberObjects), "utf-8");
  }

    
}
//console.log(manager.getName())

init();

//Use path method to push data into HTML

