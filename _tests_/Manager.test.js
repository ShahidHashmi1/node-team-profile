const Manager = require('../lib/Manager')

describe("Manager", () => {
    const employee = new Manager ("Manager", 250, "manager@gmail.com", 4125550112)
        test("test name, id, email, officeNumber", () => {
            expect(employee.name).toEqual("Manager");
            expect(employee.id).toEqual(250);
            expect(employee.email).toEqual("manager@gmail.com");
            expect(employee.officeNumber).toEqual(4125550112);
        })
describe("test all methods of employees", () => {
    const employee = new Manager ("Manager", 250, "manager@gmail.com", 4125550112)
        test("test getName, getId, getEmail, getRole, getOfficeNumber", () => {
            expect(employee.getName()).toEqual("Manager");
            expect(employee.getId()).toEqual(250);
            expect(employee.getEmail()).toEqual("manager@gmail.com");
            expect(employee.getRole()).toEqual("Manager");
            expect(employee.getOfficeNumber()).toEqual(4125550112);
        })
    })
})