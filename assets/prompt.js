const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./template")



// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'name',
//     }
//   ])
//   .then((response) =>
//     fs.appendFile('log.md', `Title\n# Table of Contents\n
//     1. [Description](#Description)\n
//     ## Description`, 
//     (err) =>
//       err ? console.error(err) : console.log('Commit logged!')
//     ));

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter your project title",
        },
        {
            type: "input",
            name: "desc",
            message: "Enter your project description"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your project license",
            choices: [
                "Apache",
                "Boost",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "None",
                "Unlicense"
            ]
        },
        {
            type: "input",
            name: "install",
            message: "Enter the project's installation process",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter the project's usage instructions"
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter your guidelines/instructions to contributing to the project"
        },
        {
            type: "input",
            name: "test",
            message: "Test?"
        },
        {
            type: "input",
            name: "questions",
            message: "Enter how you would like others ask questions about the project"
        },
        {
            type: "input",
            name: "gituser",
            message: "Enter your github username"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your project email"
        }
    ])
    .then((answers) =>
        fs.writeFile("readme.md", template(answers),
        (err) =>
            err ? console.error(err) : console.log('Commit logged!')))

// function init() {
//     const answers = prompts()
//     const generatedTemplate = template(answers)
//     fs.writeFile("readme.md", generatedTemplate)
// }

// init()