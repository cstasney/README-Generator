// Declaring dependencies in as variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("../utils/generateReadme.js")


// user prompts to enter data for README
function prompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your projects title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief project description."
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the Installation Process."
        },
        {
            type: "input",
            name: "purpose",
            message: "What is this project used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Which license best fits your project?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Who will be the contributors for this project?"
        },
        {
            type: "input",
            name: "test",
            message: "Are there any tests included in your project?"
        },
        {
            type: "input",
            name: "Contact Method",
            message: "What are you the best contact methods for you?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }
    ])
}

