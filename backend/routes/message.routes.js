import express from 'express';

const router = express.Router();

router.post("/send/:id", sendMessage)

export default router;