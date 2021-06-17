// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './App.css';


function patient() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = String(urlParams.get("id"));

   

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

    return (
    <>
    
        <h1> Welcome to ABC Hospital</h1><br/>

        <div>
            <h3>Patient Information</h3><br/>
            <div class="row">
                <div class="col-md-6">
                    <p id="p1"></p>
                    <p id="p2"></p>
                    <p id="p3"></p>
                    <p id="p4"></p>
                </div>
                <div class="col-md-6">
                    <p id="p5"></p>
                    <p id="p6"></p>
                    <p id="p7"></p>
                    <p id="p8"></p>
                    
                </div>
            </div>

    </div>


    </>
    );
}
   
    
export default patient;
