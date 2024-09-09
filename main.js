
function savedata(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var residence = document.getElementById('residence').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    if(password !== confirmpassword){
        alert('passwords did not match');
        return;
    }
   
    
    if(name == "" || email == "" || phone == "" || address == "" || pincode == "" || password == "" || confirmpassword == "" || residence == 'null'){
        alert('please fill all the fields');
        return false;
    }
 
     
     if(gender == null ){
     alert("select gender");
    return false;
     }

        if(residence == 'null'){
            alert('please selct your residence');
            return false;}
        
    var formdata = {
        name:name,
        email:email,
        phone:phone,
        address:address,
        pincode:pincode,
        gender:gender ? gender.value: "",
        residence:residence,
    
    };
    var userdata = JSON.parse(localStorage.getItem('users')) || [];
     
    userdata.push(formdata);
    localStorage.setItem('users' , JSON.stringify(userdata));

}