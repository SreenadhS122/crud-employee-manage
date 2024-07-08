document.getElementById("avatar").addEventListener("change",imageValidation);
document.getElementById("salutation").addEventListener("change",salutationValidation);
document.getElementById("firstname").addEventListener("change",firstNameValidation);
document.getElementById("firstname").addEventListener("keyup",firstNameValidation);
document.getElementById("lastname").addEventListener("change",lastNameValidation);
document.getElementById("lastname").addEventListener("keyup",lastNameValidation);
document.getElementById("email").addEventListener("change",emailValidation);
document.getElementById("email").addEventListener("keyup",emailValidation);
document.getElementById("mobile").addEventListener("change",mobileValidation);
document.getElementById("mobile").addEventListener("keyup",mobileValidation);
document.getElementById("dob").addEventListener("change",dobValidation);
document.querySelector("#Male").addEventListener("change",genderValidation);
document.querySelector("#Female").addEventListener("change",genderValidation);
document.getElementById("address").addEventListener("change",addressValidation);
document.getElementById("address").addEventListener("keyup",addressValidation);
document.getElementById("qualifications").addEventListener("keyup",qualificationsValidation);
document.getElementById("qualifications").addEventListener("change",qualificationsValidation);
document.getElementById("country").addEventListener("change",countryValidation);
document.getElementById("state").addEventListener("change",stateValidation);
document.getElementById("city").addEventListener("keyup",cityValidation);
document.getElementById("username").addEventListener("change",usernameValidation);
document.getElementById("username").addEventListener("keyup",usernameValidation);
document.getElementById("password").addEventListener("keyup",passwordValidation);
document.getElementById("editimg").addEventListener("change",editImageChange);

function imageValidation(){
    let avatar = document.getElementById("avatar").value?document.getElementById("avatar").files[0]:"";
    document.getElementById("avatarPreview").style = "display:block";
    document.getElementById("preview").src = URL.createObjectURL(document.getElementById("avatar").files[0]);
    document.getElementById("avatarVal").style = "color:green";
    document.getElementById("avatarVal").innerHTML = "Good";
}
function salutationValidation(){
    let salutation = document.getElementById("salutation").value;
    if(salutation == "Select"){
        document.getElementById("salutationVal").style = "color:red";
        document.getElementById("salutationVal").innerHTML = "Salutation is required";
    }else{
        document.getElementById("salutationVal").style = "color:green";
        document.getElementById("salutationVal").innerHTML = "Good";
    }
}
function firstNameValidation(){
    const textRegex =  /^[A-Za-z]+$/;
    let firstName = document.getElementById("firstname").value;
    if(!firstName){
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(firstName)){
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Invalid firstname";
    }else{
        document.getElementById("firstnameVal").style = "color:green";
        document.getElementById("firstnameVal").innerHTML = "Good";
    }
}
function lastNameValidation(){
    const textRegex =  /^[A-Za-z]+$/;
    let lastName = document.getElementById("lastname").value;
    if(!lastName){
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(lastName)){
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Invalid lastname";
    }else{
        document.getElementById("lastnameVal").style = "color:green";
        document.getElementById("lastnameVal").innerHTML = "Good";
    }
}
function emailValidation(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById("email").value;
    if(!email){
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Email is required";
    }else if(!emailRegex.test(email)){
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Invalid email";
    }else{
        document.getElementById("emailVal").style = "color:green";
        document.getElementById("emailVal").innerHTML = "Good";
    }
}
function mobileValidation(){
    const phoneRegex = /^\d{10}$/;
    let mobile = document.getElementById("mobile").value;
    if(!mobile){
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Mobile is required";
    }else if(!phoneRegex.test(mobile)){
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Invalid mobile";
    }else{
        document.getElementById("mobileVal").style = "color:green";
        document.getElementById("mobileVal").innerHTML = "Good";
    }
}
function dobValidation(){
    let dob = document.getElementById("dob").value;
    if(!dob){
        document.getElementById("dobVal").style = "color:red";
        document.getElementById("dobVal").innerHTML = "DOB is required";
    }else{
        document.getElementById("dobVal").style = "color:green";
        document.getElementById("dobVal").innerHTML = "Good";
    }
}
function genderValidation(){
    let gender = document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').value:"";
    if(!gender){
        document.getElementById("genderVal").style = "color:red";
        document.getElementById("genderVal").innerHTML = "Gender is required";
    }else{
        document.getElementById("genderVal").style = "color:green";
        document.getElementById("genderVal").innerHTML = "Good";
    }
}
function addressValidation(){
    let address = document.getElementById("address").value;
    if(!address){
        document.getElementById("addressVal").style = "color:red";
        document.getElementById("addressVal").innerHTML = "Address required";
    }else{
        document.getElementById("addressVal").style = "color:green";
        document.getElementById("addressVal").innerHTML = "Good";
    }
}
function qualificationsValidation(){
    let qualifications = document.getElementById("qualifications").value;
    if(!qualifications){
        document.getElementById("qualificationsVal").style = "color:red";
        document.getElementById("qualificationsVal").innerHTML = "Qualifications are required";
    }else{
        document.getElementById("qualificationsVal").style = "color:green";
        document.getElementById("qualificationsVal").innerHTML = "Good";
    }
}
function countryValidation(){
    let country = document.getElementById("country").value;
    if(country == "Select"){
        document.getElementById("countryVal").style = "color:red";
        document.getElementById("countryVal").innerHTML = "Select Country";
    }else{
        document.getElementById("countryVal").style = "color:green";
        document.getElementById("countryVal").innerHTML = "Good";
    }
}
function stateValidation(){
    let state = document.getElementById("state").value;
    if(state == "Select"){
        document.getElementById("stateVal").style = "color:red";
        document.getElementById("stateVal").innerHTML = "Select State";
    }else{
        document.getElementById("stateVal").style = "color:green";
        document.getElementById("stateVal").innerHTML = "Good";
    }
}
function cityValidation(){
    let city = document.getElementById("city").value;
    if(!city){
        document.getElementById("cityVal").style = "color:red";
        document.getElementById("cityVal").innerHTML = "City is required";
    }else{
        document.getElementById("cityVal").style = "color:green";
        document.getElementById("cityVal").innerHTML = "Good";
    }
}
function usernameValidation(){
    let username = document.getElementById("username").value;
    if(!username){
        document.getElementById("usernameVal").style = "color:red";
        document.getElementById("usernameVal").innerHTML = "Username is required";
    }else{
        document.getElementById("usernameVal").style = "color:green";
        document.getElementById("usernameVal").innerHTML = "Good";
    }
}
function passwordValidation(){
    const passwordRegex = /^\d{6}$/;
    let password = document.getElementById("password").value;
    if(!password){
        document.getElementById("passwordVal").style = "color:red";
        document.getElementById("passwordVal").innerHTML = "Password is required";
    }else{
        document.getElementById("passwordVal").style = "color:green";
        document.getElementById("passwordVal").innerHTML = "Good";
    }
}
async function validate(id){
    let errors = [];
    let employee = {};
    let avatar = document.getElementById("avatar").value?document.getElementById("avatar").files[0]:"";
    employee.salutation = document.getElementById("salutation").value;
    employee.firstname = document.getElementById("firstname").value;
    employee.lastname = document.getElementById("lastname").value;
    employee.email = document.getElementById("email").value;
    employee.mobile = document.getElementById("mobile").value;
    employee.dob = document.getElementById("dob").value?document.getElementById("dob").value.split("-").reverse().join("-"):"";
    employee.gender = document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').value:"";
    employee.address = document.getElementById("address").value;
    employee.qualifications = document.getElementById("qualifications").value;
    employee.country = document.getElementById("country").value;
    employee.state = document.getElementById("state").value;
    employee.city = document.getElementById("city").value;
    employee.username = document.getElementById("username").value;
    employee.password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const textRegex =  /^[A-Za-z]+$/;
    if(avatar){
        console.log(avatar);
        document.getElementById("avatarPreview").style = "display:block";
        document.getElementById("preview").src = URL.createObjectURL(document.getElementById("avatar").files[0]);
        document.getElementById("avatarVal").style = "color:green";
        document.getElementById("avatarVal").innerHTML = "Good";
    }
    if(employee.salutation == "Select"){
        errors.push(" ");
        document.getElementById("salutationVal").style = "color:red";
        document.getElementById("salutationVal").innerHTML = "Salutation is required";
    }else{
        document.getElementById("salutationVal").style = "color:green";
        document.getElementById("salutationVal").innerHTML = "Good";
    }
    if(!employee.firstname){
        errors.push(" ");
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Firstname is required";
    }else if(!textRegex.test(employee.firstname)){
        errors.push(" ");
        document.getElementById("firstnameVal").style = "color:red";
        document.getElementById("firstnameVal").innerHTML = "Invalid firstname";
    }else{
        document.getElementById("firstnameVal").style = "color:green";
        document.getElementById("firstnameVal").innerHTML = "Good";
    }
    if(!employee.lastname){
        errors.push(" ");
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Lastname is required";
    }else if(!textRegex.test(employee.lastname)){
        errors.push(" ");
        document.getElementById("lastnameVal").style = "color:red";
        document.getElementById("lastnameVal").innerHTML = "Invalid lastname";
    }else{
        document.getElementById("lastnameVal").style = "color:green";
        document.getElementById("lastnameVal").innerHTML = "Good";
    }
    if(!employee.email){
        errors.push(" ");
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Email is required";
    }else if(!emailRegex.test(employee.email)){
        errors.push(" ");
        document.getElementById("emailVal").style = "color:red";
        document.getElementById("emailVal").innerHTML = "Invalid email";
    }else{
        document.getElementById("emailVal").style = "color:green";
        document.getElementById("emailVal").innerHTML = "Good";
    }
    if(!employee.mobile){
        errors.push(" ");
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Mobile is required";
    }else if(!phoneRegex.test(employee.mobile)){
        errors.push(" ");
        document.getElementById("mobileVal").style = "color:red";
        document.getElementById("mobileVal").innerHTML = "Invalid mobile";
    }else{
        document.getElementById("mobileVal").style = "color:green";
        document.getElementById("mobileVal").innerHTML = "Good";
    }
    if(!employee.dob){
        errors.push(" ");
        document.getElementById("dobVal").style = "color:red";
        document.getElementById("dobVal").innerHTML = "DOB is required";
    }else{
        document.getElementById("dobVal").style = "color:green";
        document.getElementById("dobVal").innerHTML = "Good";
    }
    if(!employee.gender){
        errors.push(" ");
        document.getElementById("genderVal").style = "color:red";
        document.getElementById("genderVal").innerHTML = "Gender is required";
    }else{
        document.getElementById("genderVal").style = "color:green";
        document.getElementById("genderVal").innerHTML = "Good";
    }
    if(!employee.address){
        errors.push(" ");
        document.getElementById("addressVal").style = "color:red";
        document.getElementById("addressVal").innerHTML = "Address required";
    }else{
        document.getElementById("addressVal").style = "color:green";
        document.getElementById("addressVal").innerHTML = "Good";
    }
    if(!employee.qualifications){
        errors.push(" ");
        document.getElementById("qualificationsVal").style = "color:red";
        document.getElementById("qualificationsVal").innerHTML = "Qualifications are required";
    }else{
        document.getElementById("qualificationsVal").style = "color:green";
        document.getElementById("qualificationsVal").innerHTML = "Good";
    }
    if(employee.country == "Select"){
        errors.push(" ");
        document.getElementById("countryVal").style = "color:red";
        document.getElementById("countryVal").innerHTML = "Select Country";
    }else{
        document.getElementById("countryVal").style = "color:green";
        document.getElementById("countryVal").innerHTML = "Good";
    }
    if(employee.state == "Select"){
        errors.push(" ");
        document.getElementById("stateVal").style = "color:red";
        document.getElementById("stateVal").innerHTML = "Select State";
    }else{
        document.getElementById("stateVal").style = "color:green";
        document.getElementById("stateVal").innerHTML = "Good";
    }
    if(!employee.city){
        errors.push(" ");
        document.getElementById("cityVal").style = "color:red";
        document.getElementById("cityVal").innerHTML = "City is required";
    }else{
        document.getElementById("cityVal").style = "color:green";
        document.getElementById("cityVal").innerHTML = "Good";
    }
    if(!employee.username){
        errors.push(" ");
        document.getElementById("usernameVal").style = "color:red";
        document.getElementById("usernameVal").innerHTML = "Username is required";
    }else{
        document.getElementById("usernameVal").style = "color:green";
        document.getElementById("usernameVal").innerHTML = "Good";
    }
    if(!employee.password){
        errors.push(" ");
        document.getElementById("passwordVal").style = "color:red";
        document.getElementById("passwordVal").innerHTML = "Password is required";
    }else{
        document.getElementById("passwordVal").style = "color:green";
        document.getElementById("passwordVal").innerHTML = "Good";
    }
    if(errors.length == 0 && !id){
        addEmployee(employee,avatar);
    }else if(id && errors.length == 0){
        editEmployee(employee,id);
    } 
}
async function addEmployee(employee,avatar){
        let id;
        const response = await fetch("http://localhost:8080/admin/addEmployee",{
            method : "post",
            headers: {
                "Content-Type": "application/json",
                },
            body : JSON.stringify(employee)
        });
        const responseId = await response.json();
        console.log(responseId);
        if(responseId.msg == "ok"){
            window.location.reload();
        }else{
            document.getElementById('alert-msg').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>${responseId.msg}!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        }
        id = responseId.id;
            if(responseId.msg == "ok" && avatar){
               addAvatar(id,avatar);
            }
}
async function addAvatar(id,avatar){
    const formData = new FormData();
        formData.append('avatar',avatar);
        const response = await fetch(`http://localhost:8080/employee/profilePic/${id}`,{
            method : "post",
            body : formData
    });
    setTimeout(() => {
        window.location.reload();
    },100)
}
async function editEmployee(employee,id){
    console.log(id);
        const response = await fetch(`http://localhost:8080/admin/editEmployee/${id}`,{
            method : "put",
            headers: {
                "Content-Type": "application/json",
                },
            body : JSON.stringify(employee)
        });
    const responseId = await response.json();
    const avatar = editImageChange();
    if(responseId.msg == "ok"){
        setTimeout(() => {
            window.location.reload();
        },1000)
    }else{
        document.getElementById('alert-msg').innerHTML = 
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${responseId.msg}!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    }
    if(avatar){
       addAvatar(id,avatar);
    }
}
function addEmployeePopup(){
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8)";
    document.getElementById("form-heading").innerHTML = "Add Employee";
    document.getElementById("addemployee-upload").style = "display:flex";
    document.getElementById("edit-image").style = "display:none";
    document.getElementById("button-dia").innerHTML = "Add Employee";
    document.getElementById("empid").value = "";
    document.getElementById("addemployee-popup").style = "display:flex;flex-direction:column";
    document.getElementById("delete").style = "display:none";
    document.getElementById("main").style = "position:fixed;";
    document.getElementById("password").style = "display:block";
    document.getElementById("passwordLabel").style = "display:block";
    document.getElementById("passwordVal").style = "display:block";
}
function addEmployeePopupClose(){
    document.getElementById("passwordVal").innerHTML = "";
    document.getElementById("usernameVal").innerHTML = "";
    document.getElementById("cityVal").innerHTML = "";
    document.getElementById("stateVal").innerHTML = "";
    document.getElementById("countryVal").innerHTML = "";
    document.getElementById("qualificationsVal").innerHTML = "";
    document.getElementById("addressVal").innerHTML = "";
    document.getElementById("genderVal").innerHTML = "";
    document.getElementById("dobVal").innerHTML = "";
    document.getElementById("mobileVal").innerHTML = "";
    document.getElementById("emailVal").innerHTML = "";
    document.getElementById("lastnameVal").innerHTML = "";
    document.getElementById("firstnameVal").innerHTML = "";
    document.getElementById("salutationVal").innerHTML = "";
    document.getElementById("avatarVal").innerHTML = "";
    document.getElementById("salutation").value = "Select";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("dob").value = "";
    document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').checked=false:"";
    document.getElementById("address").value = "";
    document.getElementById("qualifications").value = "";
    document.getElementById("country").value = "Select";
    document.getElementById("state").value = "Select";
    document.getElementById("city").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("preview").src = "";
    document.getElementById("avatarPreview").style = "display:none";
    document.getElementById("addemployeePopup").style = "display:none";
    document.getElementById("main").style = "position:relative;";
}

function editEmployeePopup(id){
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8)";
    document.getElementById("form-heading").innerHTML = "Edit Employee";
    document.getElementById("addemployee-upload").style = "display:none";
    document.getElementById("edit-image").style = "display:flex";
    document.getElementById("button-dia").innerHTML = "Save Changes";
    document.getElementById("empid").value = id;
    document.getElementById("delete").style = "display:none";
    document.getElementById("addemployee-popup").style = "display:flex;flex-direction:column";
    document.getElementById("main").style = "position:fixed;";
    document.getElementById("password").style = "display:none";
    document.getElementById("passwordLabel").style = "display:none";
    document.getElementById("passwordVal").style = "display:none";
    editForm(id);
}
async function editForm(id){
    try{
    const response = await fetch(`http://localhost:8080/admin/employees/${id}`);
    const currentEmployee = await response.json();
    document.getElementById("editpic").src =  currentEmployee.avatar?`/images/avatar/${currentEmployee.avatar}`:"/images/dummy-profile-pic.jpg";
    document.getElementById("salutation").value =  currentEmployee.salutation;
    document.getElementById("firstname").value = currentEmployee.firstname;
    document.getElementById("lastname").value = currentEmployee.lastname;
    document.getElementById("email").value = currentEmployee.email;
    document.getElementById("mobile").value = currentEmployee.mobile;
    document.getElementById("dob").value = currentEmployee.dob.split("-").reverse().join("-");
    document.getElementById(`${currentEmployee.gender}`).checked = true; 
    document.getElementById("address").value = currentEmployee.address;
    document.getElementById("qualifications").value = currentEmployee.qualifications;
    document.getElementById("country").value = currentEmployee.country;
    document.getElementById("state").value = currentEmployee.state;
    document.getElementById("city").value = currentEmployee.city;
    document.getElementById("username").value = currentEmployee.username;
    document.getElementById("password").value = currentEmployee.password;
    }catch(err){
        Swal.fire({
            title: "Server Error",
            text: "Failed to fetch data",
            icon: "error"
          });
    }
}

function deleteEmployeePopup(id){
    console.log(id);
    document.getElementById("addemployeePopup").style = "display:flex;background-color:rgba(5, 3, 16, 0.8);align-items:center;";
    document.getElementById("delete").style = "display:flex";
    document.getElementById("addemployee-popup").style = "display:none";
    document.getElementById("deleteId").value = id;
    document.getElementById("main").style = "position:fixed;";
}
async function deleteEmployee(id){
    window.location.href = "/admin/dashboard";
    addEmployeePopupClose();
    await fetch(`http://localhost:8080/admin/deleteEmployee/${id}`,{
        method:"delete"
    });
}
function pagination(page){
    const limit = document.getElementById("limit-of-employee").value;
    window.location.href = `/admin/pagination/${limit}/${page}`;
}

function searchEmployee(){
    const keyword = document.getElementById("search").value;
    window.location.href = `/admin/searchEmployee/${keyword}`;
}

function editImageChange(){
    let avatar = document.getElementById("editimg").value?document.getElementById("editimg").files[0]:"";
    if(avatar){
        document.getElementById("editpic").src =  URL.createObjectURL(avatar);
    }
    return avatar;
}
function limitOfEmployee(){
    const limit = document.getElementById("limit-of-employee").value;
    window.location.href = `/admin/employeeList/${limit}`;
}