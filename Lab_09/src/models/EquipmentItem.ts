import Employee from './Employee';

type EquipmentItem = {
    id: string,
    description: string,
    employee: Employee
}

export default EquipmentItem;
export { Employee };