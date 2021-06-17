
var form = document.getElementById('form')
const lst = document.getElementById('list')
console.log(lst)
form.addEventListener('submit',function(e){
    e.preventDefault()

    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    fetch("http://127.0.0.1:5000/api/loginDoctor",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            
            'email': email,
            'password': pass,

        })
        
    }).then(function(response){
        console.log({
         
            'email': email,
            'password': pass,

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        if (data.message == "login successful")
        {
            if(lst.value == "doc"){
                //open the request 
                fetch("http://127.0.0.1:5000/api/Doctors")
                .then(function(res) {
                    return res.json(); //return the JSON Promise
                })
                .then(function(posts) {
                    //iterate over each post [100 posts]
                
                    posts.forEach(function(post) {
                        if(email == post.email && pass == post.password){
                            
                            window.open("doc.html")
                        }
                    })
                })                
            }
        }
    })

///////////////////////////////////////////////////////////////////////////////////

    fetch("http://127.0.0.1:5000/api/loginPatient",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
           
            'email': email,
            'password': pass,

        })
        
    }).then(function(response){
        console.log({
            
            'email': email,
            'password': pass,

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        if (data.message == "login successful")
        {
            if(lst.value == "pnt"){
                //open the request 
                fetch("http://127.0.0.1:5000/api/Patients")
                .then(function(res) {
                    return res.json(); //return the JSON Promise
                })
                .then(function(posts) {
                    //iterate over each post [100 posts]
                
                    posts.forEach(function(post) {
                        if(email == post.email && pass == post.password){
                            window.open("patient.html?id="+ post.PatientId)
                        }
                    })
                })                
            }
        }
    })

    /////////////////////////////////////////////////////////////////////
    fetch("http://127.0.0.1:5000/api/LoginLaboratorist",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
           
            'email': email,
            'password': pass,

        })
        
    }).then(function(response){
        console.log({
           
            'email': email,
            'password': pass,

});
        return response.json()
    }).then(function(data){
        console.log(data)
        if (data.message == "login successful")
        {
            if(lst.value == "lab"){
                //open the request 
                fetch("http://127.0.0.1:5000/api/Laboratorists")
                .then(function(res) {
                    return res.json(); //return the JSON Promise
                })
                .then(function(posts) {
                    //iterate over each post [100 posts]
                
                    posts.forEach(function(post) {
                        if(email == post.email && pass == post.password){
                            window.open("lab.html")
                        }
                    })
                })                
            }
        }
    })
    //////////////////////////////////////////////////////////////////////////////////

    fetch("http://127.0.0.1:5000/api/loginAdmin",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
           
            'email': email,
            'password': pass,

        })
        
    }).then(function(response){
        console.log({
           
            'email': email,
            'password': pass,

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        if (data.message == "login successful")
        {
            if(lst.value == "pharma"){
                //open the request 
                fetch("http://127.0.0.1:5000/api/Admins")
                .then(function(res) {
                    return res.json(); //return the JSON Promise
                })
                .then(function(posts) {
                    //iterate over each post [100 posts]
                
                    posts.forEach(function(post) {
                        if(email == post.email && pass == post.password){
                            window.open("admin/index.html")
                        }
                    })
                })                
            }
        }
    })
})



