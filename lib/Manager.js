// Include Employee class
const Employee = require("./Employee");

// Inherits Employee class
class Manager extends Employee {

  // Constructor
  constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
  }

  getRole() {
      return "Manager";
  }
}

module.exports = Manager;