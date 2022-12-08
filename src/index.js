const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');

 app = express();
 app.use(express.json());


mongoose.connect("mongodb+srv://gauravdhiman123:hiFunctionUp@gd-cluster.kufg7lx.mongodb.net/cryptos",{
    useNewUrlParser: true
})
.then(() => console.log("mongodb is connected"))
.catch(err => console.log(err))


app.use('/', route);


app.listen(3000, function(){
    console.log('express app running on port' + 3000)
});


