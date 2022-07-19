const Post = require('../model/Post');

const handleNewPost = async (req, res) => {
    const { creator, content, images } = req.body;
    if (!content) return res.status(400).json({ 'message': 'Content is required.' });
    
    try {
        //create and store the new Post
        const result = await Post.create({ 
            "creator": creator, 
            "content": content,
            "images": images 
        });

        console.log(result);
        
        res.status(201).json({ 'success': `New user ${result} created!` })
    } catch {
        res.status(500).json({ 'message': "Wrong" })
    }

}

module.exports = { handleNewPost}