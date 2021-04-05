import mongoose from 'mongoose';
import PostMessage from '../models/postMessages.js';


export const getPost = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();
        //console.log(postMessages);

        res.status(200).json(postMessages)
    }catch(error){
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
   const post = req.body;

   const newPost = new PostMessage(post);

   try{
    await newPost.save();
    res.status(201).json(newPost);

   }catch(error) {
    res.status(409).json({ message: error.message});
   }
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    console.log(`selected id  - ${id}`);
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
    const updatedPost = { creator, title, message, tags, selectedFile };

    await PostMessage.findByIdAndUpdate({_id: id}, updatedPost, { new: true });

    res.json(updatedPost);
 }

