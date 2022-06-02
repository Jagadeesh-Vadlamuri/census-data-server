const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {
        type: String
    },
    age:{
        type: String
    },
    mother:{
        type: String
    },
    father:{
        type: String
    },
    location:{
        type: String
    },
    occupation:{
        type: String
    },
    createdAt:{
        type: Date
    }

})

const dataModel = mongoose.model('census', dataSchema);

module.exports = dataModel;