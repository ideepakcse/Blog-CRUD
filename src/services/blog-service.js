const { BlogRepository }  = require('../repositories');


const blogRepository=new BlogRepository();
async function createBlog(data)
{
    try{
        const blog= await blogRepository.create(data);
        return blog;
    }
    catch(error){
        throw error;
    }
}

async function getBlog(data)
{
    try{
        const blog= await blogRepository.get(data);
        return blog;
    }
    catch(error){
        throw error;
    }
}

async function getAllBlog()
{
    try{
        const blog= await blogRepository.getAll();
        return blog;
    }
    catch(error){
        throw error;
    }
}

async function destroyBlog(data)
{
    try{
        const blog= await blogRepository.destroy(data);
        return blog;
    }
    catch(error){
        throw error;
    }
}

async function updateBlog(data,id)
{
    try{
        const blog= await blogRepository.update(data,id);
        return blog;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    createBlog,
    getBlog,
    getAllBlog,
    destroyBlog,
    updateBlog
}
