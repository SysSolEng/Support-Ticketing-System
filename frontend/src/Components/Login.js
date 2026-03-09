import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";

function Login(){

    const [u_email, setEmail] = useState("");
    const [u_password, setPassword] = useState("");

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleLoginFormSubmit(event){
        event.preventDefault();
        alert(u_email);
        alert(u_password);

    }


    return(

        <div className="row row-block">
            <div className="col-sm-3 col-md-4"></div>
            <div className="col-sm-6 col-md-4"> 
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                    <h1 className="heading-login">Login</h1>
                    <input required className="my-login-inputs" type="email" placeholder="Email Address" onChange={handleEmail} value={u_email}></input>
                    <input required className="my-login-inputs" type="password" placeholder="Password" onChange={handlePassword} value={u_password}></input>
                    <button type="submit" className="submit-login" >Submit</button>
                    <Link className="dont-have-an-account">Don't have an account? Signup.</Link>
               </form>
            </div>
            <div className="col-sm-3 col-md-4"></div>
          </div>
        
    )
}

export default Login;