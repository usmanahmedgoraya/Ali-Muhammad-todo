const mongoose = require('mongoose')

// * This is the mongodb Atlas connection link
const uri = 'mongodb+srv://alijutt9659:Ali1089@cluster0.grzazys.mongodb.net/Todo?retryWrites=true&w=majority';

// * Theses are the parameters
const connectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true,
};

// * This is the mongodb Atlas connection
mongoose.connect(uri, connectionParams).then(() => {

    console.log('Hurrah! MongoDB connection successfully established :)');

}).catch((err) => {

    console.log('Sorry Bro! MongoDB is not connected :(', err);

})