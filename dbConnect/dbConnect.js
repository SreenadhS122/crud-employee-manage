const mongoose = require('mongoose');
require('dotenv').config();

async function mongoConnect(){
    await mongoose.connect(process.env.MONGODB_URL);
}

module.exports = {mongoConnect};