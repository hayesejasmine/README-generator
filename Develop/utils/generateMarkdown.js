
//Generating license badge
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }

  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }

}

//Markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

[Tests](#tests)

[Questions](#questions)


## Description
${data.description}


## Installation
${data.install}


## Usage
${data.usage}


## License
${renderLicenseBadge(data.license)}


## Contribution
${data.contribution}


## Tests
${data.test}


## Questions

Please contact me at:

Github account- ${data.username}

Email Address- ${data.email}
`;
}

module.exports = generateMarkdown;
