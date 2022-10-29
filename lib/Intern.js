// Include Employee class
const Employee = require("./Employee");

// Inherits Employee class
class Intern extends Employee {

  // Constructor
  constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
  }

  getRole() {
      return "Intern";
  }

  getSchool() {
      this.school;
  }
}

module.exports = Intern;