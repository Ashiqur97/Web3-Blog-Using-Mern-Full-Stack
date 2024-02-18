import { errorHandler } from "../utils/error.js"

export const create = async (req, res,next) => {
    if(!req.body.isAdmin){
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }

    if(!req.body.title || !req.body.content){
        return next(errorHandler(400, 'Please provide title and content'));
    }
    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g,'-');
    const newPost = new postMessage({
        ...req.body,
        slug,
        userId: req.userId
    });
};