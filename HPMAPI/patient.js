const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    disease:{
        type: String,
        required:true,
    },
    wardnumber:{
        type: String,
        required:true
    },
    admittedDate:{
        type: Date,
        required: true,
        default: Date.now

    },
    registerBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    }
});
const Patient = mongoose.model('Patient',patientSchema)
module.exports= Patient;