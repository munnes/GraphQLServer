const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bookSchema=new Schema({
    name:String,
    genre:String,
    authorId:String
});
module.exports=mongoose.model('Book',bookSchema)// their is model named books has object look like (bookshema)
                                                 //this model interact with book collection in mongo db