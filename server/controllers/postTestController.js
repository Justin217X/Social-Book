const PostTest = require('../model/PostTest');

const handleNewPostTest = async (req, res) => {
    const { creator, content, files } = req.body;
    if (!creator || !content) return res.status(400).json({ 'message': 'Creator and Content are required.' });
    

    try {
        //create and store the new user
        const result = await PostTest.create({ 
            "creator": creator, 
            "content": content,
            "files": files 
        });

        console.log(result);
        
        res.status(201).json({ 'success': `New user ${content} created!` })
    } catch {
        res.status(500).json({ 'message': err.message })
    }

}

module.exports = { handleNewPostTest }