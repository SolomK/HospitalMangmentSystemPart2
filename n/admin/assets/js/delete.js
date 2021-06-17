var dlt = document.getElementById('del')
dlt.addEventListener('click',function(e){
    e.preventDefault()
    fetch("http://127.0.0.1:5000/api/Doctors",{
        method:"DELETE",
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
    })
})
