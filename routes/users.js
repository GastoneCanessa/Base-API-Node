import express from 'express'
// import { v4 as uuidv4} from 'uuid'
import { insertUser, getAllUsers, getUserByID, deleteUser, updateUser  } from '../controllers/users.js';
import { authenticateToken } from '../middlewares/auth.js';


const router = express.Router();

router.get('/', getAllUsers)

router.post('/', insertUser)

router.get('/:id', getUserByID)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;