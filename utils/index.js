// Declaring dependencies in as variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("../utils/generateReadme.js")
const writeFileAsync = util.promisify(fs.writeFile);

