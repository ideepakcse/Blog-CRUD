const { StatusCodes } = require('http-status-codes');
const { BlogService } = require('../services');

/*
POST REQ:
req body -> {
    title=air123,
    content=hello
}
*/
async function createBlog (req ,res) {
    
    try{
           const blog = await BlogService.createBlog({
            title : req.body.title,
            content: req.body.content
        });
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'sucessfully created an blog',
            data: blog,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while creating blog',
            data:{},
            error:error
        });
    }
}

async function getBlog (req ,res) {
    try{
          
        const blog = await BlogService.getBlog(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully fetched an blog',
            data: blog,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while fetching an blog',
            data:{},
            error:error
        });
    }
}

async function getAllBlog (req ,res) {
    try{
          
        const blog = await BlogService.getAllBlog();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully fetched all airplanes',
            data: blog,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while fetching all airplanes',
            data:{},
            error:error
        });
    }
}

async function destroyBlog (req ,res) {
    try{
        
        const response = await BlogService.destroyBlog(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully destroyed an blog',
            data: response,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while destroying blog',
            data:{},
            error:error
        });
    }
}

async function updateBlog (req ,res) {
    try{
       
        const response = await BlogService.updateBlog(req.body,req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'sucessfully updated an blog',
            data: response,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while updating blog',
            data:{},
            error:error
        });
    }
}

module.exports={
    createBlog,
    getBlog,
    getAllBlog,
    destroyBlog,
    updateBlog
}