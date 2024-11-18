


// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU GPLv3") {
    return "![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else {
    return "";
  }
}

// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "[License: GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  } 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `Click ${renderLicenseLink(license)} to look at license documentation.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title} ${renderLicenseBadge(response.license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [License](#license)
  - [Features](#features)

  ## Description
  ${response.description}
  
  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}
  
  ## Contributors
  ${response.contributors}

  ## Tests
  ${response.tests}
  
  ## License
  ${renderLicenseSection(response.license)}

  ## Features
  ${response.features}

  ## Questions
  If you have any questions, please contact me at ${response.email} or visit my github page at ${response.github}.
  `;
}



export default generateMarkdown;
