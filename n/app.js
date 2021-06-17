

const patintList = document.querySelector('.pList')
doc();
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
    })

})


function doc() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Doctors")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                const tr = document.createElement('tr')
               
                tr.className = 'pInformation';
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                td1.appendChild(document.createTextNode(post.username));
                td2.appendChild(document.createTextNode(post.email));
                td3.appendChild(document.createTextNode(post.password));
                
                td4.innerHTML = `<a href="edit.html?id=${post.DoctorId}"><i class="fas fa-edit"></i></a>`
               
                

                tr.append(td1,td2,td3,td4);
                patintList.appendChild(tr);
            
            })
        })
    }