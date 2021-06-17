const urlParams = new URLSearchParams(window.location.search);
const id = String(urlParams.get("id"));
console.log(id)

var namP,userP,emailP,addressP,passP
var form = document.getElementById('form')
var form1 = document.getElementById('form1')
aboutFilm()
async function aboutFilm() {

        //open the request 
        let response = await fetch(`http://127.0.0.1:5000/api/Patients/${id}`);

        let data = await response.json();
        document.getElementById("p1").innerHTML = "Name : " + data.name
        document.getElementById("p2").innerHTML = "email : " + data.email
        document.getElementById("p3").innerHTML = "Phone : " + data.phone
        document.getElementById("p4").innerHTML = "Address : " + data.address
        document.getElementById("p5").innerHTML = "Sympotom : " + data.symptom
        document.getElementById("p6").innerHTML = "Labtest : " + data.labtest
        document.getElementById("p7").innerHTML = "labresult: " + data.labresult
        document.getElementById("p8").innerHTML = "result: " + data.result
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value


    fetch(`http://127.0.0.1:5000/api/Patients/${id}`)
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        fetch(`http://127.0.0.1:5000/api/Patients/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': "application/json"
        },
        
        body: JSON.stringify({
            
            'status': "labDone",
            'labtest':posts.labtest,
            'result':posts.result,
            'labresult':name,
            'docname':posts.docname,
            'date':posts.date,
            

            

        })
        
    })
})
location.reload() 
        
    })
  



   
            
            