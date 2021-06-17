

var pname = document.getElementById("name");
var emaill = document.getElementById("email");

var dBirth = document.getElementById("dBirth");
var address = document.getElementById("address");
var pNumber = document.getElementById("pNumber");
var symptom = document.getElementById("symptom");
var uName = document.getElementById("uName");

var password = document.getElementById("password");
console.log(pname)
console.log(emaill)

var form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
  
    fetch("http://127.0.0.1:5000/api/Patients",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            'name': pname.value,
            'email': emaill.value,
            'address':address.value,
            'phone':pNumber.value,
            'symptom':symptom.value,
            'username':uName.value,
            'password':password.value,
            'status':"admin_needed"
            
         
        })
         
        
    }).then(function(response){
        console.log({
            'username': uName,
            

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        alert("Thank You For Choosing Abc Hospital Your appointment request sent successfully Please check your account we will send you appointment date with in 24 hours ");
        location.reload()
        
    })

})