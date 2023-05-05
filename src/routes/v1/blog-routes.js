const express = require('express');
const router =express.Router();

const { BlogController } = require('../../controllers');

router.post('/',BlogController.createBlog);
router.get('/:id',BlogController.getBlog);
router.get('/',BlogController.getAllBlog);
router.delete('/:id',BlogController.destroyBlog);
router.put('/:id',BlogController.updateBlog);
module.exports=router;