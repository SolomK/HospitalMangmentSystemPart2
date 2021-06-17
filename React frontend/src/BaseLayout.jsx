import { Grid } from '@material-ui/core'
import React from 'react'
import {Link, useLocation} from "react-router-dom"


function BaseLayout (props) {
    const location = useLocation()
    console.log("location", location.pathname)
    const pathname = location.pathname

    return (
        <div style={{minHeight:"100vh"}}>

            <nav className="z-50 navbar navbar-expand-lg navbar-yellow fixed-top bg-blue">
                <Link className="navbar-brand" to="/main">
                    <img src="images/logo2.jfif" id="logo" className="img-fluid my-0 w-25 p-1 rounded-circle" alt=""/>
                    <strong>
                        <span>ABC HOSPITAL</span>
                    </strong>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/main">WHO ARE WE
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Appointment</Link>
                        </li>

                        <li className="nav-item">
                            <Link  to="/login" className="nav-link">
                                {
                                    (pathname === "/main" || pathname ==="/login")? (
                                        "Login"): ("Logout"
                                    )
                            }
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Grid container-fluid style={{}}>
                <Grid item xs={12} style={{height: "100vh"}}>

          
            {
            props.children
        } 
                </Grid>

          </Grid>
        </div>
    )

}

export default BaseLayout
