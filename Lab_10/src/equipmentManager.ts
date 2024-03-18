import console from 'console';
import EquipmentItem, { Employee } from './models/EquipmentItem';
import EmployeeDictionary from './models/EmployeeDictionary';

function main(): void {

    const employees: EmployeeDictionary = {

        '12345': { id: '12345', name: 'Jane Smith' },
        '54321': { id: '54321', name: 'John Smith' }
    };

    const equipment: EquipmentItem[] = [

        { id: 'C001', description: 'laptop computer', employee: employees['12345'] },
        { id: 'C002', description: 'laptop computer', employee: employees['54321'] },
        { id: 'A099', description: 'company automobile', employee: employees['12345'] }
    ];

    let content: HTMLElement | null = document.getElementById('content') as HTMLElement;

    for (let item of equipment) {

        const summary: string = `${item.id}: ${item.description} assigned to ${item.employee.name}`;
        const span: HTMLElement = document.createElement('span');
        const br: HTMLElement = document.createElement('br');

        span.innerText = summary;

        content.append(span, br);
    }

    content.append(document.createElement('br'));

    for (let id in employees) {

        const summary: string = `${id}: ${employees[id].name}`;
        const span: HTMLElement = document.createElement('span');
        const br: HTMLElement = document.createElement('br');

        span.innerText = summary;

        content.append(span, br);
    }

    content.append(document.createElement('br'));
}

addEventListener('load', main);
