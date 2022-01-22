
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose=require('mongoose')
const cors =require('cors')
const app=express();

// allow cross-origin request

app.use(cors());
mongoose.connect('mongodb://localhost:27017/shaun')
mongoose.connection.once('open',()=>{
    console.log('Connected to database')
})
// handel  graphql request
// schema as object should be inside middelware function
//will give nice tool in browser to run graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
// our app to listen to port
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
