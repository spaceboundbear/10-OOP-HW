const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = this.getRole();
  }

  getRole() {
    return 'Manager';
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
