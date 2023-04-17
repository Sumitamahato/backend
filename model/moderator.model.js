const mongoose = require('mongoose');




const moderatorSchema = mongoose.Schema({
    name : String,
    category : String,
    blog_no:Number,
    added_on : {
        type:Date,
        default:Date.now
    }
},{
    versionKey:false
})



const moderatorModel = mongoose.model('moderator',moderatorSchema);



module.exports ={moderatorModel};