const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://keyur:shivam6503@cluster0.bxsbf1r.mongodb.net/gofood?retryWrites=true&w=majority';
const mongoURI = 'mongodb://keyur:shivam6503@ac-9owmljc-shard-00-00.bxsbf1r.mongodb.net:27017,ac-9owmljc-shard-00-01.bxsbf1r.mongodb.net:27017,ac-9owmljc-shard-00-02.bxsbf1r.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-zyjz8g-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCatrgory = await mongoose.connection.db.collection("foodCategory");
                foodCatrgory.find({}).toArray(function (err, catData) {
                    if (err) {
                        console.log(err);
                    } else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })

                // if (err) {
                //     console.log(err);
                // } else {
                //     global.food_items = data;
                // }
            });
        }
    });
}
module.exports = mongoDB;
