// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import BaseLayout from "./BaseLayout";

// function RowTable(props){
//     return <div className = "row">
//                         <div className="col-4">{props.f}</div>
//                         <div className="col-4">{props.t}</div>
//                         <div className="col-4"><Link to="/docedit?id=3">{props.g}</Link></div>
//                     </div>
// }

function Lab() {
      //open the request 

      useEffect(() => {
        const patintList = document.querySelector('.pList')
      fetch("http://127.0.0.1:5000/api/Patients")
      .then(function(res) {
          return res.json(); //return the JSON Promise
      })
      .then(function(posts) {
          console.log(posts);
          //iterate over each post [100 posts]
          posts.forEach(function(post) {
              if (true) {
                
                  const tr = document.createElement('tr')
              
                  tr.className = 'pInformation';
                  const td1 = document.createElement('td');
                  const td2 = document.createElement('td');
                  const td3 = document.createElement('td');
                  const td4 = document.createElement('td');
                  td1.appendChild(document.createTextNode(post.name));
                  td2.appendChild(document.createTextNode(post.email));
                  td3.appendChild(document.createTextNode(post.status));
                  
                  td4.innerHTML = `<a href="labedit?id=${post.PatientId}"><i class="fas fa-edit"></i></a>`
                   
              
                  

                  tr.append(td1,td2,td3,td4);
                  try {
                      patintList.appendChild(tr);
                      
                  } catch (error) {
                      
                  }
              }
          
          })
      })
  
      },[]);
  


    return (
    <BaseLayout><Grid container justify="center">
  
      <Grid item xs={10} style={{marginTop: "10vh"}} >
        <div>

            <div class="row">

                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <img src="/images/d.jpg" alt="doctor image" className="img-fluid"/>
                        
                    </div>
                    <div class="col-md-4">
                        <p >Name : Doctor wasihun dangura <br/><br/>
                        Wellcome to your work <br/>
                        “Doctor: Your devotion and care brings healing, comfort, and hope.”
                        </p>
                    </div>

             </div>
            
            <table id="doctor" class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>status</th>
                        
                  
                    </tr>
                </thead>
                <tbody class="pList">
                    
                </tbody>

            </table>
        </div>

        </Grid>
        </Grid>
    
    </BaseLayout>
    );
}
export default Lab;
