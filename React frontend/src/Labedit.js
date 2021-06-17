// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { Grid } from "@material-ui/core";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './App.css';
import BaseLayout from "./BaseLayout";


function Labedit() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = String(urlParams.get("id"));

    const result = useRef()
   

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

    function handleSubmit(e){
        e.preventDefault()
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
                
                'status': "seen",
                'result': posts.result,
                'labtest':posts.labtest,
                'labresult':result.current.value,
                'docname':posts.docname,
                'date':posts.date,
                
    
            })
            
        })
    })
}

    return (
    <BaseLayout>
        <Grid container justify="center" >
            <Grid item xs={8} style={{marginTop: "10vh"}}>

        
    <div class="container-fluid pt-5 my-3">

      </div>
      
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
            
           
       
        
        <form id= "form1" >
            <div class="form-group">
                <textarea ref={result}  type="text" id= "result" rows="3" class="form-control" placeholder="Please Enter result here"></textarea> 
            </div>
            <div class="form-group">
                <button onClick={handleSubmit} type="submit" value="Result" class="btn btn-primary">Result</button>
            </div>
        </form>

    </div>
        </Grid>

    </Grid>
    </BaseLayout>
    );
}
   
    
export default Labedit;
