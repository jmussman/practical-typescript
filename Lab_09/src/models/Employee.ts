enum EmployeeType {
    Salary = 1,
    Hourly = 2
}

enum EmployeeTypeB {
    Salary = "salary",
    Hourly = "hourly"
}

type Employee = {
    id: string,
    name: string
    employeeType: EmployeeType | EmployeeTypeB
}

export default Employee;
export { EmployeeType, EmployeeTypeB };