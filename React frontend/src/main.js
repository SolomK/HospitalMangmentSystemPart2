// import logo from './logo.svg';
// import { Helmet } from "helmet";
import { Grid } from "@material-ui/core";
import { useRef } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";

function main() {
  

    return (
     <BaseLayout>
       <Grid contianer-fluid alignItems="center" style={{minHeight: "100vh",backgroundImage: "url('/images/mm.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "botttom"}}>
        <Grid item xs={6} container alignItems="center" style={{ display: "flex"}} justify="center" style={{ height: "100vh"}}>
            <div style={{margin: "0 40px"}}>
                <h1 style={{color:"blue"}}>Welcome to ABC Hospital</h1>
                <p>
                    Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed
                    rhoncus
                    odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus
                    tincidunt, ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis
                    augue. Nam
                    ut nibh mollis, tristique ante sed, viverra massa.
                </p>
                <button type="button" class="btn btn-primary" onclick="window.location.href='/appointment'">Make an Appointment</button>

            </div>
        
        </Grid>
        

    </Grid>

    </BaseLayout>
    );
}
   
    
export default main;
