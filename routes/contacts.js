const express=require('express');
const router =express.Router();
var Contact =require('../Models/contact.js')
router.get('/',(req,res,next)=>{
res.json({
    message: 'hello'});
});
router.post('/',(req,res,next)=>{
var contact=new Contact({fullname: req.body.contactName ,phone:req.body.contactphone})
contact.save((err,newContact)=>{
    if(err){
        console.log(`there is an erro ${err}`)
    }else{
        res.json(newContact);
    }
})
})
module.exports=router;