let mongoose = require('mongoose');

//create a model class
let contactSchema = mongoose.Schema({
name: String,
description: String,

},
{
    collection:"favouritethings"
});

module.exports = mongoose.model('sakshi', contactSchema);