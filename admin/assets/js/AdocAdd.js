var form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    var Uname = document.getElementById('Uname').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    fetch("http://127.0.0.1:5000/api/Doctors",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            'username': Uname,
            'email': email,
            'password': pass,

        })
        
    }).then(function(response){
        console.log({
            'username': Uname,
            'email': email,
            'password': pass,

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        if(data.test){
            console.log("this in")
        }
    })

})

/////////////////////////////////////////////////////////////
