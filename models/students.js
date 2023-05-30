const mongoose = require('mongoose')
const studentsSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    enrolledDepartment:{
        type: String,
        require:true
    },
    enrollmentData:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('studentModel',studentsSchema)