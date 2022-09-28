const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub
    }
    getRole() {
        return "Engineer"
    }
    getGitHub() {
        return this.gitHub
    }
}

module.exports = Engineer;