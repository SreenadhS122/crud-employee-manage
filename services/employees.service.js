const employees = require('../models/employees');

const findAll = async () => {
    const employee = await employees.find();
    return employee;
}
const updateOne = async (id,details) => {
    const {salutation,firstname,lastname,email,mobile,dob,gender,address,qualifications,country,state,city,username} = details;
    await employees.findByIdAndUpdate(id,{salutation:salutation,firstname:firstname,lastname:lastname,email:email,mobile:mobile,dob:dob,gender:gender,address:address,qualifications:qualifications,country:country,state:state,city:city,username:username})
}
const add = async (details) => {
    await details.save();
}
const deleteOne = async (id) => {
    await employees.findByIdAndUpdate(id,{deleted:true});
}
const findOne = async (id) => {
    const employee = await employees.findById(id);
    return employee;
}

module.exports = {findAll,updateOne,add,deleteOne,findOne};