const employees = require('../models/employees');
const admins = require('../models/admin');
const bcrypt = require('bcrypt');
const empServices = require('../services/employees.service');

const addEmployee = async (req,res) => {
    console.log(req.body);
    const {salutation,firstname,lastname,email,mobile,dob,gender,address,qualifications,country,state,city,username,password} = req.body;
    if(salutation == "Select"||firstname.trim() == "" || lastname.trim() == "" || email.trim() == "" || mobile.trim() == "" || dob.trim() == "" || address.trim() == "" || qualifications.trim() == "" || country == "Select" || state == "Select" || city.trim() == "" || username.trim() == "" || password.trim() == "" || ! "gender" in req.body){
        res.json({msg:"All fields are mondatory"});
    }else{
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!await employees.findOne({email : email})){
            if(!phoneRegex.test(mobile)){
                res.json({msg:'Invalid mobile number..'});
            }else if(!emailRegex.test(email)){
                res.json({msg:'Invalid email format..'}); 
            }else{
                const employee = new employees({
                        salutation : salutation,
                        firstname : firstname,
                        lastname : lastname,
                        email : email,
                        mobile : mobile,
                        dob : dob,
                        gender : gender,
                        address : address,
                        qualifications : qualifications,
                        country : country,
                        state : state,
                        city : city,
                        username : username,
                        password : bcrypt.hashSync(password,10),
                        admin : false,
                        deleted : false
                    });
                   await empServices.add(employee);
                res.json({msg:"ok",id:(await employees.findOne({email:email}))._id});
            }
        }else{
            res.json({msg:"User with same email already exists.."});
        }
    }
}
const dashboard = async (req,res) => {
    const employee = await employees.find({},{deleted:false}).limit(3);
    const pageLimit = Math.ceil((await employees.find({},{deleted:false})).length/3);
    const total = (await employees.find({},{deleted:false})).length;
    res.render('dashboard',{employee:employee,limit:pageLimit,value:3,ind:1,loginUser:req.session.login,total:total});
}
const addEmployeeForm = (req,res) => {
    res.render("addEmployee",{msg:null,firstname:null,lastname:null,email:null,mobile:null,dob:null,gender:null,address:null,qualifications:null,city:null,username:null,salutation:"Select",country:"Select",state:"Select",password:null,loginUser:req.session.login});
}
const viewEmployee = async (req,res) => {
    const {id} = req.params;
    const employee = await empServices.findOne(id);
    res.render('viewEmployee',{employee:employee,loginUser:req.session.login});
}
const editEmployeeForm = async(req,res) => {
    const {id} = req.params;
    const employee = await empServices.findOne(id);
    res.render('editEmployee',{msg:null,employee:employee,firstname:employee.firstname,lastname:employee.lastname,email:employee.email,mobile:employee.mobile,dob:employee.dob,gender:employee.gender,address:employee.address,qualifications:employee.qualifications,city:employee.city,username:employee.username,salutation:employee.salutation,country:employee.country,state:employee.state,loginUser:req.session.login});
}
const editEmployee = async (req,res) => {
    const {id} = req.params;
    const employee = await employees.findOne({_id:id});
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {salutation,firstname,lastname,email,mobile,dob,gender,address,qualifications,country,state,city,username} = req.body;
    if(salutation == "Select"||firstname.trim() == "" || lastname.trim() == "" || email.trim() == "" || mobile.trim() == "" || dob.trim() == "" || address.trim() == "" || qualifications.trim() == "" || country == "Select" || state == "Select" || city.trim() == "" || username.trim() == "" || ! "gender" in req.body){
        res.json({msg:"Fields cannot be empty.."});
    }else{
        if(await employees.findOne({email : email}) && employee.email != email){
            res.json({msg:"User with same email exists.."});
        }else{
            if(!phoneRegex.test(mobile)){
                res.json({msg:"Invalid mobile number.."});
            }else if(!emailRegex.test(email)){
                res.json({msg:"Invalid email format.."});
            }else{
                await empServices.updateOne(id,req.body);
                res.json({msg:"ok"});
            }
        }
    }
}
const employeeProfilePic = async (req,res) => {
    const {id} = req.params;
    await employees.findByIdAndUpdate(id,{avatar:req.file.filename});
    res.redirect(`/admin/viewEmployee/${id}`);
}
const employeeList = async (req,res) => {
    const {limit} = req.params;
    const employee = await employees.find().limit(limit);
    const pageLimit = Math.ceil((await employees.find()).length/limit);
    const total = (await employees.find()).length;
    res.render('dashboard',{employee:employee,limit:pageLimit,value:limit,ind:1,loginUser:req.session.login,total:total});
}
const pagination = async (req,res) => {
    const {limit,page} = req.params;
    const employee = await employees.aggregate([
        {$match : {deleted : false}},
        {$skip : parseInt((page-1)*limit)},
        {$limit : parseInt(limit)}
    ]);
    const pageLimit = Math.ceil((await employees.find({},{deleted:false})).length/limit);
    const total = (await employees.find()).length;
    res.render('dashboard',{employee:employee,limit:pageLimit,value:limit,ind:page,loginUser:req.session.login,total:total});
}
const searchEmployee = async (req,res) => {
    const {search} = req.body;
    const searchedEmployee = await employees.find({
        $or:[{firstname : {$regex : `${search}`,$options : "i" }},
             {lastname : {$regex : `${search}`,$options : "i" }}, 
             {email : {$regex : `${search}`,$options : "i" }},
             {mobile : {$regex : `${search}`,$options : "i" }}
        ]}).limit(3);
    const pageLimit = Math.ceil(searchedEmployee.length/3);
    const total = searchedEmployee.length;
    const value = total.length>3?3:total;
    res.render('dashboard',{employee:searchedEmployee,limit:pageLimit,value:value,ind:1,loginUser:req.session.login,total:total});
}
const deleteEmployee = async (req,res) => {
    const {id} = req.params;
    await empServices.deleteOne(id);
}
const makeAdmin = async(req,res) => {
    const {id} = req.params;
    if((await employees.findById(id)).admin){
        await employees.findByIdAndUpdate(id,{admin:false});
    }else{
        await employees.findByIdAndUpdate(id,{admin:true});
    }
    res.redirect('/admin/dashboard');
}
const adminProfile = async (req,res) => {
    const {id} = req.params;
    if(await admins.findById(id)){
        console.log(await admins.findById(id));
        res.render('adminProfile',{employee:await admins.findById(id),loginUser:req.session.login});
    }else{
        res.render('adminProfile',{employee:await employees.findById(id),loginUser:req.session.login});
    }
}

const allEmployeeList = async (req,res) => {
    const {id} = req.params;
    const employee = await employees.findById(id);
    res.json(employee);
}

module.exports = {addEmployee,dashboard,addEmployeeForm,viewEmployee,editEmployeeForm,editEmployee,employeeProfilePic,employeeList,pagination,searchEmployee,deleteEmployee,makeAdmin,adminProfile,allEmployeeList};