const CrudRepository=require('./crud-repository');

const { Blog }=require('../models');


class BlogRepository extends CrudRepository{
    constructor(){
        super(Blog);
    }
}

module.exports=BlogRepository;