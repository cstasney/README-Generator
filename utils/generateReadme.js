// function to populate README.md
function generateReadme(answers) {
    return `
    <h1 align="center">${answers.projectTitle}</h1>

    ![badge](https://img.shields.io/badge/license-${answers.license}-lightblue)<br />

    ##Description
    🪧 ${answers.description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    📀 ${answers.installation}

    ## Usage
    💻 ${answers.usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license. 

    ## Contributors
    🤝 ${answers.contributing}

    ## Tests
    🧪 ${answers.tests}

    ## Questions
    ❓❓ ${answers.questions}<br />
    <br />
    Look for me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />

    📧 Email: ${answers.email}<br /><br />
    This README was created by [README-generator](https://github.com/cstasney/README-generator) 
    `;
    }

    module.exports = generateReadme