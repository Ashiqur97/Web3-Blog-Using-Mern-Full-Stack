import express from 'express';

const router = express.Router();

router.post('/create', createComment);

export default router;