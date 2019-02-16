let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the contact model
let contact = require ('../models/contact');

/* GET contact list page - READ */
router.get('/',(req,res,next) => {
    console.log(req.body);
contact.find((err,contactList) => {
    console.log(req.body);
if(err) {
    return console.error(err);
}
else{
    console.log(req.body);
    res.render('/index', {
    
title: 'Contact List',
contactList:contactList
    });
}
})
});
/*Sakshi Bharti (300991470) */

router.post('/',(req,res,next) => {
    console.log(req.body);
});
// GET the Add page for the Contact-List
router.get('/add', (req, res, next)=>{
 res.render('index/add',{
     title: "Add a new Contact"
 });
});

router.post('/index',(req, res, next)=>{
    console.log(req.body);
});


/*Sakshi Bharti (300991470) */
module.exports = router;