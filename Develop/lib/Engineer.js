// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

  // * github  // GitHub username

  // * getGithub()

  // * getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
  constructor(prop1, prop2) {
    super(prop1, prop2);
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  getProp1() {
    // return something...
  }

  setProp1() {
    // do something...
  }
    
}

module.exports = Engineer;