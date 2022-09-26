const Intern = require('../lib/Intern')

describe("Intern", () => {
    const employee = new Intern ("Intern", 15, "intern@gmail.com", "OSU")
        test("test name, id, email, school", () => {
            expect(employee.name).toEqual("Intern");
            expect(employee.id).toEqual(15);
            expect(employee.email).toEqual("intern@gmail.com");
            expect(employee.school).toEqual("OSU");
        })
describe("test all methods of interns", () => {
    const employee = new Intern ("Intern", 15, "intern@gmail.com", "OSU")
        test("test getName, getId, getEmail, getRole, getSchool", () => {
            expect(employee.getName()).toEqual("Intern");
            expect(employee.getId()).toEqual(15);
            expect(employee.getEmail()).toEqual("intern@gmail.com");
            expect(employee.getRole()).toEqual("Intern");
            expect(employee.getSchool()).toEqual("OSU");
        })
    })
})