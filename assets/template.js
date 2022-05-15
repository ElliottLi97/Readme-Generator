function template(answers) {
return `
## ${answers.title} ![badge](https://badgen.net/badge/License/${answers.license}/blue)

<a name="Description"></a>
## Description
${answers.desc}

# Table of Contents
1. [Description](#Description)
2. [Installation Instructions](#Installation-Instructions)
3. [Usage information](#Usage-Information)
4. [Contribution Guidelines](#Contribution-Guidelines)
5. [Test Instructions](#Test)
6. [Questions](#Questions)
    
    

<a name="Installation-Instructions"></a>   
## Installation Instructions
${answers.install}

<a name="Usage-Information"></a>   
## Usage Information
${answers.usage}

<a name="Contribution-Guidelines"></a>    
## Contribution Guidelines
${answers.contribution}

<a name="Test"></a>
## Test
${answers.test}

<a name="Questions"></a>
## Questions
${answers.questions}
Github: [${answers.gituser}](https://github.com/${answers.gituser})
Email me at: ${answers.email}`;
  }
  
  module.exports = template;