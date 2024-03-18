import console from 'console';
import EquipmentItem, { Employee } from './models/EquipmentItem';
import EmployeeDictionary from './models/EmployeeDictionary';

const employees: EmployeeDictionary = {

    '12345': { id: '12345', name: 'Jane Smith' },
    '54321': { id: '54321', name: 'John Smith' }
};

const equipment: EquipmentItem[] = [

    { id: 'C001', description: 'laptop computer', employee: employees['12345'] },
    { id: 'C002', description: 'laptop computer', employee: employees['54321'] },
    { id: 'A099', description: 'company automobile', employee: employees['12345'] }
];

for (let item of equipment) {

    const summary: string = `${item.id}: ${item.description} assigned to ${item.employee.name}`;

    console.log(summary);
}

console.log();

for (let id in employees) {

    const summary: string = `${id}: ${employees[id].name}`;

    console.log(summary);
}
