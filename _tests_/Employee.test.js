const Employee = require('../lib/Employee')

describe("employee", () => {
    describe("test all properties of employees", () => {
        const employee = new Employee ("Shahid", 100, "hashmi.pgh@gmail.com")
            test("test name, id, email", () => {
                expect(employee.name).toEqual("Shahid");
                expect(employee.id).toEqual(100);
                expect(employee.email).toEqual("hashmi.pgh@gmail.com");
            })
    })
    describe("test all methods of employees", () => {
        const employee = new Employee ("Nick", 120, "nick@aol.com", "Employee")
            test("test getName, getId, getEmail, getRole", () => {
                expect(employee.getName()).toEqual("Nick");
                expect(employee.getId()).toEqual(120);
                expect(employee.getEmail()).toEqual("nick@aol.com");
                expect(employee.getRole()).toEqual("Employee");
            })
    })
})