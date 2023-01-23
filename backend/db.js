const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://keyur:shivam6503@cluster0.bxsbf1r.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected");

        }
    });
}
module.exports = mongoDB;
