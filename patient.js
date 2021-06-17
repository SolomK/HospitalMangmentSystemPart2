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
        document.getElementById("p3").innerHTML = "Doctor Name : " + data.docname
        document.getElementById("p4").innerHTML = "Date : " + data.date
        document.getElementById("p5").innerHTML = "Sympotom : " + data.symptom
        document.getElementById("p6").innerHTML = "Labtest : " + data.labtest
        document.getElementById("p7").innerHTML = "labresult: " + data.labresult
        document.getElementById("p8").innerHTML = "result: " + data.result
}
