import { Request, Response } from 'express';

import Employee, { EmployeeType, EmployeeTypeB } from '../models/Employee';
import EmployeeDictionary from '../models/EmployeeDictionary';
import EquipmentItem from '../models/EquipmentItem';

let employeeDictionary: EmployeeDictionary = {

    '12345': { id: '12345', name: 'Jane Smith', employeeType: EmployeeTypeB.Salary },
    '54321': { id: '54321', name: 'John Smith', employeeType: EmployeeTypeB.Hourly }
};

let employeeDictionaryB: EmployeeDictionary = {

    '12345': { id: '12345', name: 'Jane Smith', employeeType: EmployeeTypeB.Salary },
    '54321': { id: '54321', name: 'John Smith', employeeType: EmployeeTypeB.Hourly }
};

let equipmentList: EquipmentItem[] = [

    { id: 'C001', description: 'laptop computer', employee: employeeDictionary['12345'] },
    { id: 'C002', description: 'laptop computer', employee: employeeDictionary['54321'] },
    { id: 'A099', description: 'company automobile', employee: employeeDictionary['12345'] }
];

function employees(req: Request, res: Response): Response {

    return res.json(employeeDictionary);
}

function employeesB(req: Request, res: Response): Response {

    return res.json(employeeDictionaryB);
}

function equipment(req: Request, res: Response): Response {

    return res.json(equipmentList);
}

export { employees, employeesB, equipment };