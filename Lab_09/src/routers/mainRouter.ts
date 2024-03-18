import { Router} from 'express';
import { employees, employeesB, equipment } from '../controllers/mainController';


let router: Router = Router();

router.get("/employees", employees);
router.get("/employeesB", employeesB);
router.get("/equipment", equipment);

export default router;
