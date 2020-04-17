const express =require('express');
const app =express();
var bodyParser =require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const CONNECTION_URL= "mongodb+srv://admin:admin@cluster0-qk1sh.mongodb.net/College?retryWrites=true&w=majority";
var database
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(request,response)=>{
    database.collection("Student").find({}).toArray((error,result)=>{
        if(error){
            return response.status(500).send(error);
        }
        response.send(result);
    });

})
app.get('/addStudent',(request,response)=>{
    let employee =collection.find({}).toArray((error,result)=>{
        console.log(result)
    });
    response.send('welcome to mongodb')
});
        

app.listen(3001,()=>{
    MongoClient.connect(CONNECTION_URL,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error;
        }
    database =client.db("College");    
    console.log("Connected to "+'College' +"!");
    });
});
