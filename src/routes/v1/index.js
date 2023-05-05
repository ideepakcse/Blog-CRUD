const express=require('express');

const router=express.Router();


const blogRoutes =require('./blog-routes');

router.use('/blogs',blogRoutes);

module.exports=router;