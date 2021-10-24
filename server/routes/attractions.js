import express from 'express';

import { getAttractions } from '../controllers/attractions.js';

const router = express.Router();

router.get('/attractions', getAttractions);



export default router;