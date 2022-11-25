const express=require('express');
const { default: mongoose }=require('mongoose');
const multer=require('multer');
const route=require('./router/route.js');


const app=express();

app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://project2:VfktOc3jUKliwHi8@cluster1.bil9ljf.mongodb.net/project2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});