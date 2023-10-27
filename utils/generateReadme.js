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

    `
    }