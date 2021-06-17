const urlParams = new URLSearchParams(window.location.search);
const id = String(urlParams.get("id"));
console.log(id)

var namP,userP,emailP,addressP,passP
var form = document.getElementById('form')
var form1 = document.getElementById('form1')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var Uname = document.getElementById('Uname').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    


    fetch(`http://127.0.0.1:5000/api/Doctors/${id}`)
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        fetch(`http://127.0.0.1:5000/api/Doctors/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': "application/json"
        },
        
        body: JSON.stringify({
            
            'username': Uname,
            'email': email,
            'password': pass,
            

            

        })
        
    })
})
      
        
    })
  



   
            
            