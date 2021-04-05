import express from 'express';
import {getPost, createPost, updatePost} from '../controllers/_posts.js';
const ROUTER = express.Router();

ROUTER.get('/',getPost);
ROUTER.post('/',createPost);
ROUTER.patch('/:id', updatePost);
export default ROUTER