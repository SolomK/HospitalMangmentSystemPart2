// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { Grid } from "@material-ui/core";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './App.css';
import BaseLayout from "./BaseLayout";

function App() {
    const pname = useRef()
    const emaill = useRef()
    const address = useRef()
    const pNumber = useRef()
    const symptom = useRef()
    const uName = useRef()
    const password = useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log({
            'name': pname.current.value,
            'email': emaill.current.value,
            'address':address.current.value,
            'phone':pNumber.current.value,
            'symptom':symptom.current.value,
            'username':uName.current.value,
            'password':password.current.value,
           
            
         
        });
    fetch("http://127.0.0.1:5000/api/Patients",{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            'name': pname.current.value,
            'email': emaill.current.value,
            'address':address.current.value,
            'phone':pNumber.current.value,
            'symptom':symptom.current.value,
            'username':uName.current.value,
            'password':password.current.value,
            
         
        })
         
        
    }).then(function(response){
        console.log({
            'username': uName,
            

        });
        return response.json()
    }).then(function(data){
        console.log(data)
        document.getElementById("form").reset();
        alert("Thank You For Choosing Abc Hospital Your appointment request sent successfully Please check your account we will send you appointment date with in 24 hours ");
        
    })
    }
    return (
        <BaseLayout>
     
    <Grid container justify="center" style={{marginTop:"10vh"}}>


            <Grid item xs={10}  id="main" className="card">

                <div id="myModal" className="modal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">

                                <h4 className="modal-title">Successfull Registration</h4>
                            </div>
                            <div className="modal-body">
                                <p>You Have Successfully Appointed a doctor if there is any update we will announce you with your account
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onclick="document.getElementById('myModal').style.display = 'none'">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
                <h1 >
                    Welcome to ABC Hospital</h1>

                <div className="card-content">
                    <form id="form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="text">Name</label>
                                    <input ref={pname} type="text" className="form-control" placeholder="Name" id="name" required/>
                                </div>
                                <div className="form-group">
                                    <label for="text">Age
                                    </label>
                                    <input type="text" className="form-control" placeholder="age" id="dBirth"/>
                                </div>
                                <div className="form-group">
                                    <label for="city">Address</label>
                                    <input ref={address}  type="text" className="form-control" placeholder="Address" id="address"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input ref={emaill}  type="email" className="form-control" placeholder="Email" id="email"/>
                                </div>
                                <div className="form-group">
                                    <label for="number">Phone number</label>
                                    <input ref={pNumber}  type="number" className="form-control" placeholder="Phone" id="pNumber"/>
                                </div>
                                <h2>Create Account</h2>
                                <div className="form-group">
                                    <label for="text">User Name</label>
                                    <input ref={uName}  type="text" className="form-control" placeholder="User Name" id="uName" required/>
                                </div>
                                <div className="form-group">
                                    <label for="text">password</label>
                                    <input ref={password}  type="password" className="form-control" placeholder="password" id="password" required/>
                                </div>

                            </div>
                        </div>
                        <div className="form-group">
                            <label for="text">symptom</label>
                            <textarea ref={symptom}  className="form-control" rows="5" name="task" id="symptom" placeholder="symptom"></textarea>
                        </div>
                        <input onClick={handleSubmit} type="button" value="Register" className="form-control btn btn-primary"/>
                    </form>
                </div>
            </Grid>
        </Grid>
        </BaseLayout>
    );
}

export default App;
