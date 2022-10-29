// Include Employee class
const Employee = require("./Employee");

// Inherits Employee properties
class Engineer extends Employee {
  // Constructor
  constructor(name, id, email, github) {
    super(name, id, email, giuthub);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;