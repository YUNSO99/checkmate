const mongoose = require('mongoose');
const config = require('config');
process.env["NODE_CONFIG_DIR"] = __dirname;


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://yunso:9914@chekmate-shard-00-00.l2etq.mongodb.net:27017,chekmate-shard-00-01.l2etq.mongodb.net:27017,chekmate-shard-00-02.l2etq.mongodb.net:27017/?ssl=true&replicaSet=atlas-7vmnev-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;