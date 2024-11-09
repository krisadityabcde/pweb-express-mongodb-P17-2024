import { Router, Request, Response } from 'express';
import { 
  getAllBooks, 
  getBookById, 
  addBook, 
  modifyBook, 
  removeBook 
} from '../controllers/book.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router: Router = Router();

router.use(authenticateToken);

router.get('/', async (req: Request, res: Response) => {
  await getAllBooks(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
  await getBookById(req, res);
});

router.post('/', async (req: Request, res: Response) => {
  await addBook(req, res);
});

router.patch('/:id', async (req: Request, res: Response) => {
  await modifyBook(req, res);
});

router.delete('/:id', async (req: Request, res: Response) => {
  await removeBook(req, res);
});

export default router;
