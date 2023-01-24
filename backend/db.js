const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://keyur:shivam6503@cluster0.bxsbf1r.mongodb.net/gofood?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log();
                }
            });
        }
    });
}
module.exports = mongoDB;
