import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Signup.css";



function Signup(){

    const [u_name, setName] = useState("");
    const [u_surname, setSurname] = useState("");
    const [u_email, setEmail] = useState("");
    const [u_password, setPassword] = useState("");
    const [u_confirm_password, setConfirmPassword] = useState("");


    function handleName(event){
        setName(event.target.value);
    }

    function handleSurname(event){
        setSurname(event.target.value);
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }


    function handlePassword(event){
        setPassword(event.target.value);
    }


    function handleConfirmPassword(event){
       setConfirmPassword(event.target.value);
    }

    function handleSubmitSignupForm(event){
        event.preventDefault();
        alert(u_name);
        alert(u_surname);
        alert(u_email);
        alert(u_password);
        alert(u_confirm_password);
    }



    return(
         <div className="row row-block">
            <div className="col-sm-3 col-md-4"></div>
            <div className="col-sm-6 col-md-4"> 
                <form className="signup-form" onSubmit={handleSubmitSignupForm}>
                    <h1 className="heading-signup">Signup</h1>
                    <input required className="my-signup-inputs" type="text" placeholder="Name" onChange={handleName} value={u_name}></input>
                    <input required className="my-signup-inputs" type="text" placeholder="Surname" onChange={handleSurname} value={u_surname}></input>
                    <input required className="my-signup-inputs" type="email" placeholder="Email address" onChange={handleEmail} value={u_email}></input>
                    <input required className="my-signup-inputs" type="password" placeholder="Password" onChange={handlePassword} value={u_password}></input>
                    <input required className="my-signup-inputs" type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={u_confirm_password}></input>
                    <button type="submit" className="submit-signup" >Submit</button>
                    <Link className="already-have-an-account">Already have an account? Login</Link>
               </form>
            </div>
            <div className="col-sm-3 col-md-4"></div>
          </div>
    )

}


export default Signup;