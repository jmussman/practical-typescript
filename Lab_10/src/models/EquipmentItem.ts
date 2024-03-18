import Employee from '../models/Employee';

type EquipmentItem = {
    id: string,
    description: string,
    employee: Employee
}

export default EquipmentItem;
export { Employee };