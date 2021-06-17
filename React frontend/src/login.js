// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { Grid } from "@material-ui/core";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './App.css';
import BaseLayout from "./BaseLayout";


function Login() {
    const lst = useRef()
    const email = useRef()
    const pass = useRef() 
    function handleSubmit(e){
        e.preventDefault()     
       
            fetch("http://127.0.0.1:5000/api/loginDoctor",{
                method:"POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    
                    'email': email.current.value,
                    'password': pass.current.value,
        
                })
                
            }).then(function(response){
                console.log({
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
                });
                return response.json()
            }).then(function(data){
                console.log(data)
                if (data.message == "login successful")
                {
                    if(lst.current.value == "doc"){
                        //open the request 
                        fetch("http://127.0.0.1:5000/api/Doctors")
                        .then(function(res) {
                            return res.json(); //return the JSON Promise
                        })
                        .then(function(posts) {
                            //iterate over each post [100 posts]
                        
                            posts.forEach(function(post) {
                                if(email.current.value == post.email && pass.current.value == post.password){
                                    
                                    window.open("/doc")
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
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
                })
                
            }).then(function(response){
                console.log({
                    
                    'email': email.current.value,
                    'password': pass.current.value,
        
                });
                return response.json()
            }).then(function(data){
                console.log(data)
                if (data.message == "login successful")
                {
                    if(lst.current.value == "pnt"){
                        //open the request 
                        fetch("http://127.0.0.1:5000/api/Patients")
                        .then(function(res) {
                            return res.json(); //return the JSON Promise
                        })
                        .then(function(posts) {
                            //iterate over each post [100 posts]
                        
                            posts.forEach(function(post) {
                                if(email.current.value == post.email && pass.current.value == post.password){
                                    window.open("/patient?id="+ post.PatientId)
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
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
                })
                
            }).then(function(response){
                console.log({
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
        });
                return response.json()
            }).then(function(data){
                console.log(data)
                if (data.message == "login successful")
                {
                    if(lst.current.value == "lab"){
                        //open the request 
                        fetch("http://127.0.0.1:5000/api/Laboratorists")
                        .then(function(res) {
                            return res.json(); //return the JSON Promise
                        })
                        .then(function(posts) {
                            //iterate over each post [100 posts]
                        
                            posts.forEach(function(post) {
                                if(email.current.value == post.email && pass.current.value == post.password){
                                    window.open("/lab")
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
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
                })
                
            }).then(function(response){
                console.log({
                
                    'email': email.current.value,
                    'password': pass.current.value,
        
                });
                return response.json()
            }).then(function(data){
                console.log(data)
                if (data.message == "login successful")
                {
                    if(lst.current.value == "pharma"){
                        //open the request 
                        fetch("http://127.0.0.1:5000/api/Admins")
                        .then(function(res) {
                            return res.json(); //return the JSON Promise
                        })
                        .then(function(posts) {
                            //iterate over each post [100 posts]
                        
                            posts.forEach(function(post) {
                                if(email.current.value == post.email && pass.current.value == post.password){
                                    window.open("/doc")
                                }
                            })
                        })                
                    }
                }
            })
        
    



}

    return (
    <BaseLayout>
        <Grid container justify="center" style={{marginTop: "20vh"}}  >
        <Grid item xs={4}>
            <form>
                <div class="form-group">
                    <label for="cars">emaill:</label>
                    <input ref={email} class="form-control" type="text" id= "email" placeholder="email"/>
                </div>
                <div class="form-group">
                    <label for="cars">Password:</label>
                    <input ref={pass} class="form-control" type="password" id= "pass" placeholder="password"/>
                </div>
                <div class="form-group">
                    
                    <label for="cars">who are you:</label>
                    <select ref={lst} id="list" >
                        <option  id="doc" value="doc">Doctor</option>
                        <option id="patient" value="pnt">Patient</option>
                        <option id="lab" value="lab">Laboratorist</option>
                        <option id="pharma" value="pharma">Admin</option>
                    </select>
                </div>
                <div class="form-group">           
                    <input onClick={handleSubmit} type="submit" value="Login" class="btn btn-primary"/>
                </div>
            </form>
        </Grid>
        
    </Grid>
    </BaseLayout>



    );
}
   
    
export default Login;
