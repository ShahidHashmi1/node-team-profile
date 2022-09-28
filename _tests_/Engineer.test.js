const Engineer = require('../lib/Engineer')

describe("Manager", () => {
    const employee = new Engineer ("Engineer", 500, "engineer@gmail.com", "Engineer500")
        test("test name, id, email, github", () => {
            expect(employee.name).toEqual("Engineer");
            expect(employee.id).toEqual(500);
            expect(employee.email).toEqual("engineer@gmail.com");
            expect(employee.gitHub).toEqual("Engineer500");
        })
describe("test all methods of employees", () => {
    const employee = new Engineer ("Engineer", 500, "engineer@gmail.com", "Engineer500")
        test("test getName, getId, getEmail, getRole, getGitHub", () => {
            expect(employee.getName()).toEqual("Engineer");
            expect(employee.getId()).toEqual(500);
            expect(employee.getEmail()).toEqual("engineer@gmail.com");
            expect(employee.getRole()).toEqual("Engineer");
            expect(employee.getGitHub()).toEqual("Engineer500");
        })
    })
})