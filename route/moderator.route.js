const express=require('express');
const {authentication}=require('../middleware/authentication.middleware');
const {authorize}=require('../middleware/authorize.middleware');
const {moderatorModel} = require('../model/moderator.model');





const moderatorRoute = express.Router();





moderatorRoute.get('/',authentication,async(req,res)=>{
    try{
        const data = await moderatorModel.find();
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(404).json({"msg":"Error in fetching the blogs"})
    }
})





moderatorRoute.post('/addproducts',authentication,authorize(['moderator']),async(req,res)=>{
    try{
        const {name,category,blog_no,added_on} = req.body;
        const newBlog = new  moderatorModel({name,category,blog_no,added_on});
        await newBlog.save();
        res.send(await newBlog.save())
    }catch(err){
        console.log(err);
        res.status(404).json({'msg':'Error in adding the new blogs'})
    }
})

moderatorRoute.delete('/deleteproducts/:id',authentication,authorize(['moderator']),async(req,res)=>{
    try{
        const id = req.params.id;
        await moderatorModel.findByIdAndDelete({_id:id});
        res.send(await moderatorModel.find())
    }catch(err){
        console.log(err);
        res.status(404).json({'msg':'Error in deleting the existing Blogs'})
    }
})

module.exports ={moderatorRoute}